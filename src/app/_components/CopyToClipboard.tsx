import { useEffect, useRef, useState, type FC } from "react";

import { Button } from "@components/Button";

type Props = {
	text: string;
};

const copyTextToClipboard = async (text: string): Promise<void> => {
	await navigator.clipboard.writeText(text);
};

const RESET_DELAY = 1000;

export const CopyToClipboard: FC<Props> = ({ text }) => {
	const [status, setStatus] = useState<"none" | "good" | "bad">("none");
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (buttonRef.current === null) {
			return;
		}
		const width = buttonRef.current.getBoundingClientRect().width;
		buttonRef.current.style.width = `${width}px`;
	}, []);

	const handleCopy = (): void => {
		copyTextToClipboard(text)
			.then(() => {
				setStatus("good");
				setTimeout(() => {
					setStatus("none");
				}, RESET_DELAY);
			})
			.catch((error: unknown) => {
				console.error("Copy Failed:");
				console.error(error);
				setStatus("bad");
				setTimeout(() => {
					setStatus("none");
				}, RESET_DELAY);
			});
	};
	return (
		<Button onClick={handleCopy} ref={buttonRef}>
			{status === "good" ?
				"Copied"
			: status === "bad" ?
				"Copy Failed"
			:	"Copy Results"}
		</Button>
	);
};
