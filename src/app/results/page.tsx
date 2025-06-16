import Link from "next/link";
import { Suspense, type FC } from "react";

import { CalculateResults } from "@/app/results/_components/CalculateResults";
import { Button } from "@/components/Button";

const ResultsRoot: FC = () => {
	return (
		<div className="m-4 flex flex-col gap-4">
			<Button>
				<Link href="/">&larr; Back</Link>
			</Button>
			<Suspense fallback={<div>Loading</div>}>
				<CalculateResults />
			</Suspense>
		</div>
	);
};

export default ResultsRoot;
