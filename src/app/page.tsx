"use client";

import { useState, type FC } from "react";

import { InputForm } from "./_components/InputForm";
import { ResultsPage } from "./_components/ResultsPage";

const Home: FC = () => {
	const [soybeanYield, setSoybeanYield] = useState<number>();
	return soybeanYield === undefined ?
			<div className="m-4">
				<InputForm setSoybeanYield={setSoybeanYield} />
			</div>
		:	<ResultsPage
				soybeanYield={soybeanYield}
				setSoybeanYield={setSoybeanYield}
			/>;
};

export default Home;
