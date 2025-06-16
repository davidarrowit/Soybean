import { Results } from "@/components/Results";
import Link from "next/link";
import { Suspense, type FC } from "react";

const ResultsPage: FC = () => {
	return (
		<>
			<Link href="/">Back</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Results />
			</Suspense>
		</>
	);
};

export default ResultsPage;
