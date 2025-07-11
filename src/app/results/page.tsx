import Link from "next/link";
import { Suspense, type FC } from "react";

import { CalculateResults } from "./_components/CalculateResults";
import { MoreInformation } from "./_components/MoreInformation";

import { Button } from "@components/Button";

const ResultsRoot: FC = () => {
	return (
		<div className="mx-auto my-8 flex max-w-7xl flex-col gap-8 px-8">
			<Link href="/" className="w-fit">
				<Button>Change Yield</Button>
			</Link>
			<Suspense fallback={<div>Loading</div>}>
				{/* <CalculateResults /> */}
			</Suspense>
			<MoreInformation />
		</div>
	);
};

export default ResultsRoot;
