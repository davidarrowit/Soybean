"use client";

import { useState, type FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView";

import { predict } from "@models";
import type { Results, SectionResults } from "@models";

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
	// const params = useSearchParams();
	// const soybeanYieldStr = params.get("yield");
	// if (typeof soybeanYieldStr !== "string") {
	// 	redirect("/");
	// }
	// const soybeanYield = Number.parseFloat(soybeanYieldStr);
	// if (Number.isNaN(soybeanYield)) {
	// 	redirect("/");
	// }
	const [soybeanYield, setSoybeanYield] = useState<number>();
	const [isValid, setIsValid] = useState(true);
	const results = predict(soybeanYield);
	const text = renderResults(results);
	return (
		<div className="flex flex-col gap-6 items-start">
			<div className="flex flex-row gap-2 items-center mb-4">
				<label htmlFor="yield" className="hover:cursor-text text-xl">
					Soybean Yield:
				</label>
				<div className="relative">
					<input
						className={`${isValid ? "bg-gray-100" : "bg-red-100"} border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2`}
						type="text"
						name="yield"
						id="yield"
						onChange={(e) => {
							const v = e.target.value;
							if (v.length === 0) {
								setIsValid(true);
								return;
							}
							const n = Number.parseFloat(v);
							if (Number.isNaN(n)) {
								// invalid
								setIsValid(false);
							} else {
								setIsValid(true);
								setSoybeanYield(n);
							}
						}}
					/>
					{isValid ? (
						<></>
					) : (
						<div className="absolute left-0 right-0 mx-auto w-fit mt-1 text-red-600">
							Please enter a valid number
						</div>
					)}
				</div>
				<span className="text-xl">bu/ac</span>
			</div>
			<ResultsView results={results} />
			<CopyToClipboard text={text} />
			<EmailResults text={text} />
			{/* <pre className="font-mono">{text}</pre> */}
		</div>
	);
};
