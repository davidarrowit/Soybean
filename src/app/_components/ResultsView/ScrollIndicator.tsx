import type { FC } from "react";

type Props = {
	panel: number;
};

export const ScrollIndicator: FC<Props> = ({ panel }) => {
	return (
		<div className="flex flex-row justify-center gap-2 pt-2 sm:hidden">
			<div
				className={`h-4 w-4 rounded-full transition duration-200 ${panel === 1 ? "bg-gray-500" : "bg-gray-300"}`}
			></div>
			<div
				className={`h-4 w-4 rounded-full transition duration-200 ${panel === 2 ? "bg-gray-500" : "bg-gray-300"}`}
			></div>
			<div
				className={`h-4 w-4 rounded-full transition duration-200 ${panel === 3 ? "bg-gray-500" : "bg-gray-300"}`}
			></div>
		</div>
	);
};
