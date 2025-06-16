import type { FC } from "react";

import { NutrientView } from "./NutrientView";

import type { Results } from "@/models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	return (
		<div className="flex flex-row gap-8">
			<NutrientView
				sectionResults={results.removal}
				title="Total Removal (units)"
			/>
			<NutrientView
				sectionResults={results.uptake}
				title="Total Uptake (units)"
			/>
			<NutrientView
				sectionResults={results.stover}
				title="Total Removal in Stover (units)"
			/>
		</div>
	);
};
