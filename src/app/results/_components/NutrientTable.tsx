import type { FC } from "react";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	const stringified = sectionResults.map(
		([name, value]) =>
			[
				name,
				value?.value.toFixed(3) ?? "",
				value?.se.toFixed(3) ?? "",
			] as const,
	);
	return (
		<table className="m-auto">
			<tbody>
				{stringified.map(([name, value, se]) => {
					return (
						<tr
							key={name}
							className={
								"border-b-2 border-y-slate-400 last:border-none" +
								(value.startsWith("-") ? " text-red-600" : "")
							}
						>
							<td className="py-1 pr-4">{name}</td>
							<td className="pr-2 text-right font-mono text-lg">{value}</td>
							<td className="font-mono text-lg">&#177;{se}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
