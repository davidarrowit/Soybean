import { IndividualCalc } from "@/models";
import { FC } from "react";

type Props = {
	calc: IndividualCalc;
};

export const NutrientTable: FC<Props> = ({ calc }) => {
	return (
		<div>
			{calc.map(([name, value]) =>
				value >= 0 ? (
					<div key={name}>
						{name}: {value.toFixed(3)}
					</div>
				) : (
					<div className="text-red-600" key={name}>
						{name}: {value.toFixed(3)}
					</div>
				),
			)}
		</div>
	);
};
