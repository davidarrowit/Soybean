import type { FC } from "react";

type Props = {
	text: string;
};

export const CopyToClipboard: FC<Props> = ({ text }) => {
	return (
		<div>
			<button onClick={() => void navigator.clipboard.writeText(text)}>
				Copy Results
			</button>
		</div>
	);
};
