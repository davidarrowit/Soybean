import type { FC } from "react";

import { Button } from "../../../components/Button";

type Props = {
	text: string;
};

export const CopyToClipboard: FC<Props> = ({ text }) => {
	return (
		<Button onClick={() => void navigator.clipboard.writeText(text)}>
			Copy Results
		</Button>
	);
};
