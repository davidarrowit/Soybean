"use client";

import { redirect, useSearchParams } from "next/navigation";
import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView";

import { predict } from "@models";
import type { Results } from "@models";

const renderResults = (calc: Results): string => {
	return JSON.stringify(calc);
};

export const CalculateResults: FC = () => {
	const params = useSearchParams();
	const soybeanYieldStr = params.get("yield");
	if (typeof soybeanYieldStr !== "string") {
		redirect("/");
	}
	const soybeanYield = Number.parseFloat(soybeanYieldStr);
	if (Number.isNaN(soybeanYield)) {
		redirect("/");
	}
	const results = predict(soybeanYield);
	const text = renderResults(results);
	return (
		<div className="flex flex-col gap-4">
			<ResultsView results={results} />
			<CopyToClipboard text={text} />
			<EmailResults text={text} />
		</div>
	);
};
