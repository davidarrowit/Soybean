import type { FC } from "react";

import { NutrientTable } from "./NutrientTable";

import type { IndividualCalc } from "@/models";

type Props = {
	calc: IndividualCalc;
	title: string;
};

export const NutrientView: FC<Props> = ({ calc, title }) => {
	return (
		<div className="flex flex-col gap-4">
			{title}
			<NutrientTable calc={calc} />
		</div>
	);
};
