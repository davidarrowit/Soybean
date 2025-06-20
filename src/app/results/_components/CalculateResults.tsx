"use client";

import { redirect, useSearchParams } from "next/navigation";
import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView";

import type { Results, SectionResults } from "@models";
import { predict } from "@models";

const alignLines = (lines: string[], alignMode: boolean): string[] => {
	const max = Math.max(...lines.map((l) => l.length));
	return lines.map((l) =>
		alignMode ? l + " ".repeat(max - l.length) : " ".repeat(max - l.length) + l,
	);
};

const renderSection = (section: SectionResults): string => {
	const names = section.map(([name]) => name);
	const values = section.map(([, value]) => value?.value.toFixed(3) ?? "");
	const se = section.map(([, value]) => value?.se ?? "");
	const alignedValues = alignLines(values, false);
	return alignLines(names, true)
		.map(
			(l, i) =>
				l + "\t" + alignedValues[i].toString() + " ±" + se[i].toString(),
		)
		.join("\n");
};

const renderResults = (results: Results): string => {
	const removal = renderSection(results.removal);
	const uptake = renderSection(results.uptake);
	const stover = renderSection(results.stover);
	return `Total Removal (units):
${removal}

Total Uptake (units):
${uptake}

Total Removal in Stover (units):
${stover}`;
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
		<div className="flex flex-col items-start gap-6">
			<div className="text-xl">Yield: {soybeanYield} bu/ac</div>
			<ResultsView results={results} />
			<CopyToClipboard text={text} />
			<EmailResults text={text} />
			{/* <pre className="font-mono">{text}</pre> */}
		</div>
	);
};
