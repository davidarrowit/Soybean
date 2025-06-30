/* eslint-disable unicorn/numeric-separators-style */

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

export type Nutrient = (typeof nutrientsList)[number];

export type NutrientModel = {
	coefficients: number[];
	se: number;
	r2: number;
	decimals: number;
};

const totalUptake: Record<Nutrient, NutrientModel> = {
	N: {
		coefficients: [3.75154992801, 1.93556252662],
		se: 21.2056854498,
		r2: 0.802,
		decimals: 1,
	}, // given se was 20, got 21.20...
	P2O5: {
		coefficients: [0.895526848366, 1.00708487534],
		se: 6.71511052836,
		r2: 0.6972,
		decimals: 1,
	},
	K2O: {
		coefficients: [2.30021881388, 15.6191403778],
		se: 24.64809068,
		r2: 0.5299,
		decimals: 1,
	}, // se was 23.7, got 24.64...
	S: {
		coefficients: [0.211556656639, 1.83337207933],
		se: 2.0550399794,
		r2: 0.5784,
		decimals: 1,
	},
	Mg: {
		coefficients: [0.51429890608, -2.99055939676],
		se: 7.400297795,
		r2: 0.3847,
		decimals: 1,
	},
	Ca: {
		coefficients: [0.963015366677, 5.94634376139],
		se: 17.6386383724,
		r2: 0.2784,
		decimals: 1,
	},
	Zn: {
		coefficients: [0.00293993921621, 0.00914992593492],
		se: 0.0480056119571,
		r2: 0.3268,
		decimals: 3,
	},
	Mn: {
		coefficients: [0.00419325748415, 0.13614205438],
		se: 0.112854036422,
		r2: 0.3894,
		decimals: 3,
	},
	Cu: {
		coefficients: [0.00119050950057, -0.0130903675214],
		se: 0.0136791843323,
		r2: 0.4951,
		decimals: 3,
	},
	Fe: {
		coefficients: [0.00609993888474, 0.132418514517],
		se: 0.178884097499,
		r2: 0.1308,
		decimals: 3,
	},
	B: {
		coefficients: [0.00242771538758, 0.0402836308523],
		se: 0.0568218784007,
		r2: 0.1911,
		decimals: 3,
	},
};

const totalRemoval: Record<Nutrient, NutrientModel> = {
	N: {
		coefficients: [3.30332839003, -10.3418161562],
		se: 13.0226114699,
		r2: 0.8928,
		decimals: 1,
	},
	P2O5: {
		coefficients: [0.742122850811, -0.322049349453],
		se: 2.93291654112,
		r2: 0.8923,
		decimals: 1,
	},
	K2O: {
		coefficients: [1.17165514414, 4.20237545721],
		se: 3.89766990081,
		r2: 0.9212,
		decimals: 1,
	},
	S: {
		coefficients: [0.162539939487, 0.235826522033],
		se: 1.03693372864,
		r2: 0.7608,
		decimals: 1,
	}, // given 2nd coef was 0.41, got 0.23...
	Mg: {
		coefficients: [0.162006781611, -0.206804720211],
		se: 0.669630883174,
		r2: 0.8834,
		decimals: 1,
	},
	Ca: {
		coefficients: [0.121030865351, 0.980289386231],
		se: 0.966476846211,
		r2: 0.67,
		decimals: 1,
	},
	Zn: {
		coefficients: [0.00225940000255, -0.00857171913431],
		se: 0.0214045446834,
		r2: 0.5905,
		decimals: 3,
	},
	Mn: {
		coefficients: [0.00149836038475, 0.00899595408405],
		se: 0.0168027965605,
		r2: 0.5072,
		decimals: 3,
	},
	Cu: {
		coefficients: [0.000908548130952, -0.0167954446349],
		se: 0.00745565938653,
		r2: 0.6578,
		decimals: 3,
	},
	Fe: {
		coefficients: [0.00230263304881, 0.0108367173089],
		se: 0.0364379583464,
		r2: 0.3408,
		decimals: 3,
	},
	B: {
		coefficients: [0.00124348173095, 0.00608926563397],
		se: 0.0269807223826,
		r2: 0.2157,
		decimals: 3,
	},
};

const removalInStover = {
	N: { value: 18.7725805493, se: 0.167709439026, decimals: 1 },
	P2O5: { value: 5.05792850116, se: 0.100213576958, decimals: 1 },
	K2O: { value: 38.7380116066, se: 0.469624833825, decimals: 1 },
	S: { value: 2.24521457957, se: 0.0464202146988, decimals: 1 },
	Mg: { value: 9.11455121749, se: 0.136238128646, decimals: 1 },
	Ca: { value: 27.1751655125, se: 0.250230834084, decimals: 1 },
	Zn: { value: 0.0282885358008, se: 0.000869868878158, decimals: 3 },
	Mn: { value: 0.142902249784, se: 0.00332135081857, decimals: 3 },
	Cu: { value: 0.0102929838686, se: 0.000111842922446, decimals: 3 },
	Fe: { value: 0.170582553386, se: 0.0046126617137, decimals: 3 },
	B: { value: 0.0505529504873, se: 0.000571411958452, decimals: 3 },
};

const calc_model_prediction = (coefficients: number[], y: number): number =>
	coefficients.reduce((cur, x) => x + y * cur, 0);

export type IndividualResult = {
	nutrient: Nutrient;
	value: number;
	se: number;
	decimals: number;
};

export type SectionResults = {
	data: IndividualResult[];
	maxDecimals: number;
};

export type Results = {
	uptake: SectionResults;
	removal: SectionResults;
	stover: SectionResults;
};

const formatPredictions = (
	f: (n: Nutrient) => Omit<IndividualResult, "nutrient">,
): SectionResults => {
	const data = nutrientsList.map((nutrient) => ({ nutrient, ...f(nutrient) }));
	return {
		data,
		maxDecimals: Math.max(...data.map((result) => result.decimals)),
	};
};

export const predict = (soybeanYield: number): Results => {
	return {
		uptake: formatPredictions((n) => ({
			...totalUptake[n],
			value: calc_model_prediction(totalUptake[n].coefficients, soybeanYield),
		})),
		removal: formatPredictions((n) => ({
			...totalRemoval[n],
			value: calc_model_prediction(totalRemoval[n].coefficients, soybeanYield),
		})),
		stover: formatPredictions((n) => removalInStover[n]),
	};
};
