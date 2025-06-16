"use client";

import { redirect, useSearchParams } from "next/navigation";
import type { FC } from "react";

import { CopyToClipboard } from "./CopyToClipboard";
import { EmailResults } from "./EmailResults";
import { ResultsView } from "./ResultsView";

import type { NutrientCalc } from "@/models";
import { calculate_nutrients } from "@/models";

const renderCalc = (calc: NutrientCalc): string => {
	return JSON.stringify(calc);
};

export const Results: FC = () => {
	const params = useSearchParams();
	const soybeanYield = params.get("yield");
	if (typeof soybeanYield !== "string") {
		redirect("/");
	}
	const n = Number.parseFloat(soybeanYield);
	if (Number.isNaN(n)) {
		redirect("/");
	}
	const calc = calculate_nutrients(n);
	const text = renderCalc(calc);
	return (
		<div className="flex flex-col gap-4">
			<ResultsView calc={calc} />
			<CopyToClipboard text={text} />
			<EmailResults text={text} />
		</div>
	);
};
