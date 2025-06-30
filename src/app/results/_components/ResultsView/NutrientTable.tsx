import type { FC, ReactNode } from "react";

import type { Nutrient, SectionResults } from "@models";
import { pad } from "@utils";

type Props = {
	sectionResults: SectionResults;
};

const nameRenders: Record<Nutrient, ReactNode> = {
	N: "N",
	P2O5: (
		<>
			P<sub>2</sub>O<sub>5</sub>
		</>
	),
	K2O: (
		<>
			K<sub>2</sub>O
		</>
	),
	S: "S",
	Mg: "Mg",
	Ca: "Ca",
	Zn: "Zn",
	Mn: "Mn",
	Cu: "Cu",
	Fe: "Fe",
	B: "B",
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	const rows = sectionResults.data.map(({ nutrient, value, se, decimals }) => (
		<tr
			key={nutrient}
			className={
				"border-b-2 border-y-slate-400 last:border-none" +
				(value < 0 ? " text-red-600" : "")
			}
		>
			<td className="py-1 pr-9">{nameRenders[nutrient]}</td>
			<td className="pr-4 text-right font-mono text-lg">
				<pre>
					{pad(
						value.toFixed(decimals),
						sectionResults.maxDecimals - decimals,
						false,
					)}
				</pre>
			</td>
			<td>&#177;</td>
			<td className="text-right font-mono text-lg">
				<pre>
					{pad(
						se.toFixed(decimals),
						sectionResults.maxDecimals - decimals,
						false,
					)}
				</pre>
			</td>
		</tr>
	));

	return (
		<table className="m-auto">
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td className="text-center" colSpan={2}>
						SE (&#177;)
					</td>
				</tr>
				{rows}
			</tbody>
		</table>
	);
};
