import { useState, type FC } from "react";

import { Button } from "@components/Button";

type Props = {
	text: string;
};

const statusColor = (status: string): string => {
	switch (status) {
		case "good": {
			return "bg-green-100";
		}
		case "bad": {
			return "bg-red-100";
		}
		case "inprogress": {
			return "bg-yellow-100";
		}
		default: {
			return "";
		}
	}
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
		<Button className={statusColor(status)} onClick={handleCopy}>
			Copy Results
		</Button>
	);
};
