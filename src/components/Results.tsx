"use client";

import { redirect, useSearchParams } from "next/navigation";
import { FC } from "react";
import { ResultsView } from "./ResultsView";

export const Results: FC = () => {
	const params = useSearchParams();
	const soybeanYield = params.get("yield");
	if (typeof soybeanYield != "string") {
		redirect("/");
	}
	let n = Number.parseFloat(soybeanYield);
	if (Number.isNaN(n)) {
		redirect("/");
	}
	return <ResultsView soybeanYield={n} />;
};
