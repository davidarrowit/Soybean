import { NutrientCalc } from "@/models";
import { FC } from "react";

type Props = {
	text: string;
};

export const CopyToClipboard: FC<Props> = ({ text }) => {
	return (
		<div>
			<button onClick={() => navigator.clipboard.writeText(text)}>
				Copy Results
			</button>
		</div>
	);
};
