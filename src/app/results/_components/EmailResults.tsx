import type { FC } from "react";

import { Button } from "@components/Button";

type Props = {
	text: string;
};

export const EmailResults: FC<Props> = ({ text }) => {
	return (
		<a href={`mailto:?body=${encodeURIComponent(text)}`}>
			<Button>Email Results</Button>
		</a>
	);
};
