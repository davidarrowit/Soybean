import type { FC } from "react";

import { NutrientView } from "./NutrientView";

import type { Results } from "@models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	return (
		<div className="max-w-full snap-x snap-mandatory overflow-x-auto">
			<div className="flex flex-row gap-8">
				<NutrientView
					sectionResults={results.removal}
					title="Total Removal (lbs/ac)"
				/>
				<NutrientView
					sectionResults={results.uptake}
					title="Total Uptake (lbs/ac)"
				/>
				<NutrientView
					sectionResults={results.stover}
					title="Total Removal in the Stover (lbs/ton)"
				/>
			</div>
		</div>
	);
};
