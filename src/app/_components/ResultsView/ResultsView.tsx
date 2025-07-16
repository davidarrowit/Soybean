import { useRef, useState, type FC } from "react";

import { ScrollIndicator } from "./ScrollIndicator";
import { SectionView } from "./SectionView";

import type { Results } from "@models";

type Props = {
	results: Results;
};

export const ResultsView: FC<Props> = ({ results }) => {
	const [panel, setPanel] = useState(1);

	const ref = useRef<HTMLDivElement>(null);

	const handleScroll = (): void => {
		if (ref.current === null) {
			return;
		}
		const percent = (ref.current.scrollLeft / ref.current.scrollWidth) * 100;
		if (percent < 16.5) {
			setPanel(1);
		} else if (percent < 47.5) {
			setPanel(2);
		} else {
			setPanel(3);
		}
	};

	return (
		<div className="w-full">
			<div
				className="flex w-full snap-x snap-mandatory flex-row overflow-x-auto not-sm:gap-4 sm:gap-8"
				onScroll={handleScroll}
				ref={ref}
			>
				<div className="not-sm:min-w-12"></div>
				<SectionView sectionResults={results.uptake}>
					<div className="text-nowrap">
						Total Uptake<sup>1</sup>
					</div>
					<div>(lbs/a)</div>
				</SectionView>
				<SectionView sectionResults={results.removal}>
					<div className="text-nowrap">Total Removal in Grain</div>
					<div>(lbs/a)</div>
				</SectionView>
				<SectionView sectionResults={results.stover}>
					<div className="text-nowrap">Total Removal in Stover</div>
					<div>(lbs/ton)</div>
				</SectionView>
				<div className="not-sm:min-w-12"></div>
			</div>
			<ScrollIndicator panel={panel} />
		</div>
	);
};
