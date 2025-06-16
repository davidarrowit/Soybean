import type { FC } from "react";

import { NutrientView } from "./NutrientView";

import type { ModelPredictions } from "@/models";

type Props = {
	calc: ModelPredictions;
};

export const ResultsView: FC<Props> = ({ calc }) => {
	return (
		<div className="flex flex-row gap-8">
			<NutrientView calc={calc.removal} title="Total Removal (units)" />
			<NutrientView calc={calc.uptake} title="Total Uptake (units)" />
			<NutrientView
				calc={calc.stover}
				title="Total Removal in Stover (units)"
			/>
		</div>
	);
};
