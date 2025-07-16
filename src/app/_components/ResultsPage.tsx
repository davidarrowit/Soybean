import type { Dispatch, FC, SetStateAction } from "react";

import { CalculateResults } from "./CalculateResults";
import { MoreInformation } from "./MoreInformation";

import { Button } from "@components/Button";

type Props = {
	soybeanYield: number;
	setSoybeanYield: Dispatch<SetStateAction<number | undefined>>;
};

export const ResultsPage: FC<Props> = ({ soybeanYield, setSoybeanYield }) => {
	return (
		<div className="mx-auto flex max-w-7xl flex-col gap-8 p-4">
			<Button
				className="w-fit"
				onClick={() => {
					setSoybeanYield(undefined);
				}}
			>
				Change Yield
			</Button>
			<CalculateResults soybeanYield={soybeanYield} />
			<MoreInformation />
		</div>
	);
};
