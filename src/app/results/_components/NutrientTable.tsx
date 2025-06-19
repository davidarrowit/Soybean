import type { FC } from "react";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	const stringified = sectionResults.map(
		([name, value]) => [name, value.toFixed(3)] as const,
	);
	const maxLen = Math.max(...stringified.map((x) => x[1].length));
	const formatted = stringified.map(
		([name, value]) =>
			[name, " ".repeat(maxLen - value.length) + value] as const,
	);
	return (
		<table className="m-auto">
			<tbody>
				{formatted.map(([name, value]) => {
					return (
						<tr
							key={name}
							className={"border-b-2 border-y-slate-400 last:border-none" + (value.startsWith("-") ? " text-red-600" : "")}
						>
							<td className="pr-4">{name}</td>
							<td className="font-mono text-lg">
								<pre>{value}</pre>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
