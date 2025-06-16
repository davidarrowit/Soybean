import { FC } from "react";

type Props = {
	text: string;
};

export const EmailResults: FC<Props> = ({ text }) => {
	return <a href={`mailto:?body=${text}`}>Email Results</a>;
};
