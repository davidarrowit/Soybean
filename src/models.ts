const nutrientsList = [
	"N",
	"P2O5",
	"K2O",
	"S",
	"Mg",
	"Ca",
	"Zn",
	"Mn",
	"Cu",
	"Fe",
	"B",
] as const;

type Nutrient = (typeof nutrientsList)[number];

export type NutrientModel = {
	coefficients: number[];
	se: number;
	r2: number;
};

const totalUptake = {
	N: { coefficients: [3.75, +1.94], se: 20, r2: 0.8 },
	P2O5: { coefficients: [0.9, +1.01], se: 6.7, r2: 0.7 },
	K2O: { coefficients: [2.3, +15.62], se: 23.7, r2: 0.53 },
	S: { coefficients: [0.21, +1.83], se: 2.1, r2: 0.58 },
	Mg: { coefficients: [0.51, -2.99], se: 7.4, r2: 0.39 },
	Ca: { coefficients: [0.96, +5.94], se: 17.6, r2: 0.28 },
	Zn: { coefficients: [0.003, +0.009], se: 0.05, r2: 0.33 },
	Mn: { coefficients: [0.004, +0.136], se: 0.11, r2: 0.15 },
	Cu: { coefficients: [0.001, -0.013], se: 0.01, r2: 0.5 },
	Fe: { coefficients: [0.006, +0.132], se: 0.18, r2: 0.13 },
	B: { coefficients: [0.002, +0.041], se: 0.06, r2: 0.19 },
};

const totalRemoval = {
	N: { coefficients: [3.3, -10.35], se: 13, r2: 0.89 },
	P2O5: { coefficients: [0.74, -0.32], se: 2.9, r2: 0.89 },
	K2O: { coefficients: [1.17, +4.2], se: 3.9, r2: 0.92 },
	S: { coefficients: [0.16, +0.41], se: 1, r2: 0.76 },
	Mg: { coefficients: [0.16, -0.21], se: 0.7, r2: 0.88 },
	Ca: { coefficients: [0.12, +0.98], se: 1, r2: 0.67 },
	Zn: { coefficients: [0.002, -0.009], se: 0.02, r2: 0.59 },
	Mn: { coefficients: [0.002, +0.009], se: 0.02, r2: 0.51 },
	Cu: { coefficients: [0.001, -0.017], se: 0.01, r2: 0.66 },
	Fe: { coefficients: [0.002, +0.01], se: 0.04, r2: 0.34 },
	B: { coefficients: [0.001, +0.006], se: 0.03, r2: 0.22 },
};

const removalInStover = {
	N: { value: 18.8, se: 0.17 },
	P2O5: { value: 5.1, se: 0.1 },
	K2O: { value: 38.7, se: 0.47 },
	S: { value: 2.3, se: 0.05 },
	Mg: { value: 9.1, se: 0.14 },
	Ca: { value: 27.2, se: 0.25 },
	Zn: { value: 0.03, se: 0.0001 },
	Mn: { value: 0.1, se: 0.0001 },
	Cu: { value: 0.01, se: 0.0001 },
	Fe: { value: 0.2, se: 0.0001 },
	B: { value: 0.1, se: 0.0001 },
};

const calc_model_prediction = (n: NutrientModel, y: number): number =>
	n.coefficients.reduce((cur, x) => x + y * cur, 0);

export type SectionResults = [Nutrient, number][];

export type Results = {
	uptake: SectionResults;
	removal: SectionResults;
	stover: SectionResults;
};

const formatPredictions = (f: (n: Nutrient) => number): SectionResults =>
	nutrientsList.map((nutrient) => [nutrient, f(nutrient)] as const);

export const predict = (soybeanYield: number): Results => ({
	uptake: formatPredictions((n) =>
		calc_model_prediction(totalUptake[n], soybeanYield),
	),
	removal: formatPredictions((n) =>
		calc_model_prediction(totalRemoval[n], soybeanYield),
	),
	stover: formatPredictions((n) => removalInStover[n].value),
});
