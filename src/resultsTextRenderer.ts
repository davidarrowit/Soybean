import type { Results, SectionResults } from "@models";
import { alignLines, pad } from "@utils";

const renderSection = ({ data, maxDecimals }: SectionResults): string => {
	const names = data.map(({ nutrient }) => nutrient);
	const values = data.map(({ value, decimals }) =>
		pad(value.toFixed(decimals), maxDecimals - decimals, false),
	);
	const se = data.map(({ se, decimals }) =>
		pad(se.toFixed(decimals), maxDecimals - decimals, false),
	);

	const alignedValues = alignLines(values, false);
	const alignedSe = alignLines(se, false);
	const body = alignLines(names, true).map((l, i) =>
		`${l}  ${alignedValues[i]} ±${alignedSe[i]}`.trim(),
	);
	const header = renderHeader(body[0]);
	return `${header}${body.join("\n")}`;
};

const renderHeader = (firstLine: string): string => {
	const index = firstLine.indexOf("±");
	return index === -1 ? "" : pad("SE (±)\n", index, true);
};

export const renderResults = (results: Results): string => {
	const uptake = renderSection(results.uptake);
	const removal = renderSection(results.removal);
	const stover = renderSection(results.stover);
	return `Total Uptake (lbs/a):
${uptake}

Total Removal (lbs/a):
${removal}

Total Removal in Stover (lbs/ton):
${stover}`;
};
