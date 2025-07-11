import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView/ResultsView";

import { predict } from "@models";
import { renderResults } from "@resultsTextRenderer";

type Props = {
	soybeanYield: number;
};

export const CalculateResults: FC<Props> = ({ soybeanYield }) => {
	const results = predict(soybeanYield);
	const text = renderResults(results);
	return (
		<div className="flex flex-col items-start gap-4">
			<div className="text-xl">
				For your yield of {soybeanYield} bu/a, these are your uptake and removal
				rates
			</div>
			<ResultsView results={results} />
			<div className="flex flex-row gap-4">
				<CopyToClipboard text={text} />
				<EmailResults text={text} />
			</div>
			<div>
				<sup>1</sup>Estimated Total Seasonal Nutrient Uptake in Above-Ground
				Biomass
			</div>
			{/* <pre className="font-mono">{text}</pre> */}
		</div>
	);
};
