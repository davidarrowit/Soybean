import { Suspense, type FC } from "react";

import { CalculateResults } from "./results/_components/CalculateResults";

const Home: FC = () => {
	return (
		<div className="m-4 flex flex-col gap-4">
			<Suspense fallback={<div>Loading</div>}>
				<CalculateResults />
			</Suspense>
		</div>
	);
};

export default Home;
