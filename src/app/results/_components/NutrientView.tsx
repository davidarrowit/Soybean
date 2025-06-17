import type { FC } from "react";

import { NutrientTable } from "./NutrientTable";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
	title: string;
};

export const NutrientView: FC<Props> = ({ sectionResults, title }) => {
	return (
		<div className="flex flex-col gap-4">
			{title}
			<div>
				<NutrientTable sectionResults={sectionResults} />
			</div>
		</div>
	);
};
