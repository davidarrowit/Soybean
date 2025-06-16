import type { FC } from "react";

import type { SectionResults } from "@/models";

type Props = {
	sectionResults: SectionResults;
};

export const NutrientTable: FC<Props> = ({ sectionResults }) => {
	return (
		<div>
			{sectionResults.map(([name, value]) => (
				<div key={name} className={value >= 0 ? "" : "text-red-600"}>
					{name}: {value.toFixed(3)}
				</div>
			))}
		</div>
	);
};
