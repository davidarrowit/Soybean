import type { FC, ReactNode } from "react";

import { NutrientTable } from "./NutrientTable";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
	children: ReactNode;
};

export const SectionView: FC<Props> = ({ sectionResults, children }) => {
	return (
		// w-full makes individual elements full-width, and sm:w-96 makes them big when the screen is bigger than sm
		<div className="flex min-w-fit snap-center flex-col gap-4 bg-gray-300 px-6 py-4 not-sm:w-[75%] not-sm:shrink-0">
			<div className="text-center text-xl font-bold">{children}</div>
			<div>
				<NutrientTable sectionResults={sectionResults} />
			</div>
		</div>
	);
};
