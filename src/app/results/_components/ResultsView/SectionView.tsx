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
		<div className="flex grow snap-center flex-col gap-4 rounded-2xl bg-slate-300 p-4 not-sm:w-full not-sm:shrink-0">
			<div className="text-center text-xl">{children}</div>
			<div>
				<NutrientTable sectionResults={sectionResults} />
			</div>
		</div>
	);
};
