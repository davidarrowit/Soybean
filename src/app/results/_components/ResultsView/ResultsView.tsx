import type { FC } from "react";

import { SectionView } from "./SectionView";

import type { Results } from "@models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	return (
		<div className="max-w-full snap-x snap-mandatory overflow-x-auto">
			<div className="flex flex-row gap-8">
				<SectionView
					sectionResults={results.uptake}
					title="Total Uptake (lbs/ac)"
				/>
				<SectionView
					sectionResults={results.removal}
					title="Total Removal in Grain (lbs/ac)"
				/>
				<SectionView
					sectionResults={results.stover}
					title="Total Removal in Stover (lbs/ton)"
				/>
			</div>
		</div>
	);
};
