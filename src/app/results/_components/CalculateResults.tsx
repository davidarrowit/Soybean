"use client";

import { redirect, useSearchParams } from "next/navigation";
import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView/ResultsView";

import type { Results, SectionResults } from "@models";
import { predict } from "@models";

const alignLines = (lines: string[], leftAlign: boolean): string[] => {
	const max = Math.max(...lines.map((l) => l.length));
	return lines.map((l) =>
		leftAlign ? l + " ".repeat(max - l.length) : " ".repeat(max - l.length) + l,
	);
};

const renderSection = (section: SectionResults): string => {
	const names = section.data.map(({ nutrient }) => nutrient);
	const values = section.data.map(
		({ value, decimals }) =>
			value.toFixed(decimals) + " ".repeat(section.maxDecimals - decimals),
	);
	const se = section.data.map(
		({ se, decimals }) =>
			se.toFixed(decimals) + " ".repeat(section.maxDecimals - decimals),
	);
	const alignedValues = alignLines(values, false);
	const alignedSe = alignLines(se, false);
	return alignLines(names, true)
		.map(
			(l, i) =>
				l + "\t" + alignedValues[i].toString() + " ±" + alignedSe[i].toString(),
		)
		.join("\n");
};

const renderResults = (results: Results): string => {
	const removal = renderSection(results.removal);
	const uptake = renderSection(results.uptake);
	const stover = renderSection(results.stover);
	return `Total Uptake (lbs/a):
${uptake}

Total Removal (lbs/a):
${removal}

Total Removal in Stover (lbs/ton):
${stover}`;
};

const useYield = (): number => {
	const params = useSearchParams();
	const soybeanYieldStr = params.get("yield");
	if (typeof soybeanYieldStr !== "string") {
		redirect("/");
	}
	const soybeanYield = Number.parseFloat(soybeanYieldStr);
	if (Number.isNaN(soybeanYield)) {
		redirect("/");
	}
	return soybeanYield;
};

export const CalculateResults: FC = () => {
	const soybeanYield = useYield();
	const results = predict(soybeanYield);
	const text = renderResults(results);
	return (
		<div className="flex flex-col items-start gap-4">
			<div className="text-xl">
				For your yield of {soybeanYield} bu/a, these are your uptake and removal
				rates
			</div>
			<ResultsView results={results} />
			<div className="flex flex-row gap-4">
				<CopyToClipboard text={text} />
				<EmailResults text={text} />
			</div>
			<div>
				<sup>1</sup>Estimated Total Seasonal Nutrient Uptake in Above-Ground
				Biomass
			</div>
			{/* <pre className="font-mono">{text}</pre> */}
		</div>
	);
};
