import type { FC } from "react";

import { Button } from "./Button";

type Props = {
	text: string;
};

export const EmailResults: FC<Props> = ({ text }) => {
	return (
		<Button>
			<a href={`mailto:?body=${text}`}>Email Results</a>
		</Button>
	);
};
