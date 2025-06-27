import type { FC } from "react";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	const rows = sectionResults.map(([name, { value, se, decimals }]) => (
		<tr
			key={name}
			className={
				"border-b-2 border-y-slate-400 last:border-none" +
				(value < 0 ? " text-red-600" : "")
			}
		>
			<td className="py-1 pr-9">{name}</td>
			<td className="pr-4 text-right font-mono text-lg">
				<pre>{value.toFixed(decimals) + " ".repeat(3 - decimals)}</pre>
			</td>
			<td className="font-mono text-lg">&#177;{se.toFixed(decimals)}</td>
		</tr>
	));

	return (
		<table className="m-auto">
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td>SE (+/-)</td>
				</tr>
				{rows}
			</tbody>
		</table>
	);
};
