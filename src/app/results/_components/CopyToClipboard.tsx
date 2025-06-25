import { useState, type FC } from "react";

import { Button } from "@components/Button";

type Props = {
	text: string;
};

const copyTextToClipboard = async (text: string): Promise<void> => {
	await navigator.clipboard.writeText(text);
};

export const CopyToClipboard: FC<Props> = ({ text }) => {
	const [status, setStatus] = useState<"none" | "good" | "bad" | "inprogress">(
		"none",
	);
	const handleCopy = (): void => {
		setStatus("inprogress");
		copyTextToClipboard(text)
			.then(() => {
				setStatus("good");
				setTimeout(() => {
					setStatus("none");
				}, 1000);
			})
			.catch(() => {
				setStatus("bad");
				setTimeout(() => {
					setStatus("none");
				}, 1000);
			});
	};
	return (
		<Button onClick={handleCopy}>
			{status === "good" ?
				"Copied"
			: status === "bad" ?
				"Copy Failed"
			:	"Copy Results"}
		</Button>
	);
};
