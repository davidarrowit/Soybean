import { NutrientOutput } from "@/components/NutrientOutput";
import {
	nutrientsList,
	removalInStover,
	totalRemoval,
	totalUptake,
} from "@/models";
import type { FC } from "react";

type Props = {
	soybeanYield: number;
};

export const ResultsView: FC<Props> = ({ soybeanYield }) => {
	return (
		<div className="flex flex-row gap-8">
			<div className="flex flex-col gap-4">
				Total Uptake (units)
				<NutrientOutput
					nutrientData={totalUptake}
					soybeanYield={soybeanYield}
				/>
			</div>
			<div className="flex flex-col gap-4">
				Total Removal (units)
				<NutrientOutput
					nutrientData={totalRemoval}
					soybeanYield={soybeanYield}
				/>
			</div>
			<div className="flex flex-col gap-4">
				Total Removal in Stover (units)
				<div>
					{nutrientsList.map((nutrient) => (
						<div key={nutrient}>
							{nutrient}: {removalInStover[nutrient].value}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
