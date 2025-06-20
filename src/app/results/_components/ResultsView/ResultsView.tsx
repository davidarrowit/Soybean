import type { FC } from "react";

import { SectionView } from "./SectionView";

import type { Results } from "@models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	return (
		<div className="w-full snap-x snap-mandatory overflow-x-auto">
			<div className="flex w-full flex-row gap-8">
				<SectionView sectionResults={results.uptake}>
					Total Uptake
					<br />
					(lbs/ac)
				</SectionView>
				<SectionView sectionResults={results.removal}>
					Total Removal in Grain
					<br />
					(lbs/ac)
				</SectionView>
				<SectionView sectionResults={results.stover}>
					Total Removal in Stover
					<br />
					(lbs/ton)
				</SectionView>
			</div>
		</div>
	);
};
