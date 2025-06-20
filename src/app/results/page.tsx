import Link from "next/link";
import { Suspense, type FC } from "react";

import { CalculateResults } from "./_components/CalculateResults";

import { Button } from "@components/Button";

const ResultsRoot: FC = () => {
	return (
		<div className="m-4 flex flex-col items-start gap-4">
			<Link href="/">
				<Button>&larr; Back</Button>
			</Link>
			<Suspense fallback={<div>Loading</div>}>
				<CalculateResults />
			</Suspense>
		</div>
	);
};

export default ResultsRoot;
