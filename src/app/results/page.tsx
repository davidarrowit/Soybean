import Link from "next/link";
import { Suspense, type FC } from "react";

import { Results } from "@/app/results/_components/Results";
import { Button } from "@/components/Button";

const ResultsPage: FC = () => {
	return (
		<div className="m-4 flex flex-col gap-4">
			<Button>
				<Link href="/">&larr; Back</Link>
			</Button>
			<Suspense fallback={<div>Loading</div>}>
				<Results />
			</Suspense>
		</div>
	);
};

export default ResultsPage;
