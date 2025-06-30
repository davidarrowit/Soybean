export const pad = (s: string, len: number, leftPad: boolean): string =>
	leftPad ? " ".repeat(len) + s : s + " ".repeat(len);

export const alignLines = (lines: string[], leftAlign: boolean): string[] => {
	const max = Math.max(...lines.map((l) => l.length));
	return lines.map((l) => pad(l, max - l.length, !leftAlign)); // pad on the opposite side
};
