import type { FC } from "react";

import { NutrientTable } from "./NutrientTable";

import type { SectionResults } from "@models";

type Props = {
	sectionResults: SectionResults;
	title: string;
};

export const SectionView: FC<Props> = ({ sectionResults, title }) => {
	return (
		// w-full makes individual elements full-width, and sm:w-96 makes them big when the screen is bigger than sm
		<div className="flex w-full snap-center flex-col gap-4 rounded-2xl bg-slate-300 p-4 not-sm:shrink-0 sm:w-96">
			<div className="m-auto text-xl">{title}</div>
			<div>
				<NutrientTable sectionResults={sectionResults} />
			</div>
		</div>
	);
};
