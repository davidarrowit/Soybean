import type { FC } from "react";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	const rows = sectionResults.map(([name, { value, se }]) => (
		<tr
			key={name}
			className={
				"border-b-2 border-y-slate-400 last:border-none" +
				(value < 0 ? " text-red-600" : "")
			}
		>
			<td className="py-1 pr-9">{name}</td>
			<td className="pr-4 text-right font-mono text-lg">{value.toFixed(3)}</td>
			<td className="font-mono text-lg">&#177;{se.toFixed(3)}</td>
		</tr>
	));

	return (
		<table className="m-auto">
			<tbody>{rows}</tbody>
		</table>
	);
};
