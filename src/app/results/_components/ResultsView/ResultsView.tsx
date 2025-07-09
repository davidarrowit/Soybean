import type { FC } from "react";

import { SectionView } from "./SectionView";

import type { Results } from "@models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	return (
		<div className="flex w-full snap-x snap-mandatory flex-row gap-8 overflow-x-auto">
			<SectionView sectionResults={results.uptake}>
				Total Uptake<sup>1</sup>
				<br />
				(lbs/a)
			</SectionView>
			<SectionView sectionResults={results.removal}>
				Total Removal in Grain
				<br />
				(lbs/a)
			</SectionView>
			<SectionView sectionResults={results.stover}>
				Total Removal in Stover
				<br />
				(lbs/ton)
			</SectionView>
		</div>
	);
};
