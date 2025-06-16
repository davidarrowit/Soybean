import { Results } from "@/components/Results";
import { Suspense, type FC } from "react";

const ResultsPage: FC = () => {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Results />
		</Suspense>
	);
};

export default ResultsPage;
