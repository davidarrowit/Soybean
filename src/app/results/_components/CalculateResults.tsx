"use client";

import { redirect, useSearchParams } from "next/navigation";
import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView";

import { ExternalLink } from "@components/ExternalLink";
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
	const se = section.map(([, value]) => value?.se.toFixed(3) ?? "");
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
			<div className="text-xl">
				For your yield of {soybeanYield} bu/a these are the nutrient removal
				rates:
			</div>
			<ResultsView results={results} />
			<p>
				For more information, consult{" "}
				<ExternalLink
					target="_blank"
					href="https://walworth.extension.wisc.edu/files/2018/11/Nutrient-Application-Guidelines-for-Field-Vegetable-Fruit-Crops-in-WI-A2809.pdf"
				>
					Nutrient Application Guidelines for Field, Vegetable, and Fruit Crops
					in Wisconsin (A2809)
				</ExternalLink>{" "}
				or{" "}
				<ExternalLink
					target="_blank"
					href="https://coolbean.info/library/documents/55586_03WINutrientGuide5.5x8.5_NoBleed_HR_FINAL.pdf"
				>
					55586_03 WI Nutrient Guide 5.5x8.5.indd
				</ExternalLink>{" "}
				or{" "}
				<ExternalLink
					target="_blank"
					href="https://acsess.onlinelibrary.wiley.com/doi/10.2134/agronj2017.12.0699"
				>
					Secondary and Micronutrient Uptake, Partitioning, and Removal across a
					Wide Range of Soybean Seed Yield Levels | Agronomy Journal
				</ExternalLink>
			</p>
			<CopyToClipboard text={text} />
			<EmailResults text={text} />
			{/* <pre className="font-mono">{text}</pre> */}
		</div>
	);
};
