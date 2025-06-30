import type { Results, SectionResults } from "@models";
import { alignLines, pad } from "@utils";

const renderSection = (section: SectionResults): string => {
	const names = section.data.map(({ nutrient }) => nutrient);
	const values = section.data.map(({ value, decimals }) =>
		pad(value.toFixed(decimals), section.maxDecimals - decimals, false),
	);
	const se = section.data.map(({ se, decimals }) =>
		pad(se.toFixed(decimals), section.maxDecimals - decimals, false),
	);
	const alignedValues = alignLines(values, false);
	const alignedSe = alignLines(se, false);
	return alignLines(names, true)
		.map((l, i) => `${l}  ${alignedValues[i]} ±${alignedSe[i]}`.trim())
		.join("\n");
};

const renderHeader = (section: string): string =>
	pad("SE (±)", section.indexOf("±"), true);

export const renderResults = (results: Results): string => {
	const uptake = renderSection(results.uptake);
	const removal = renderSection(results.removal);
	const stover = renderSection(results.stover);
	return `Total Uptake (lbs/a):
${renderHeader(uptake)}
${uptake}

Total Removal (lbs/a):
${renderHeader(removal)}
${removal}

Total Removal in Stover (lbs/ton):
${renderHeader(stover)}
${stover}`;
};
