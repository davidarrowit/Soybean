import { calc_nutrient, Nutrients, nutrientsList } from "@/models";
import { FC } from "react";

type Props = {
	nutrientData: Nutrients;
	soybeanYield: number;
};

export const NutrientOutput: FC<Props> = ({
	nutrientData,
	soybeanYield: output,
}) => {
	return (
		<div>
			{nutrientsList.map((nutrient) => (
				<div key={nutrient}>
					{nutrient}:{" "}
					{calc_nutrient(nutrientData[nutrient], output).toFixed(3)}
				</div>
			))}
		</div>
	);
};
