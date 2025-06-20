import type { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

type Props = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

export const ExternalLink: FC<Props> = ({ className, ...rest }) => {
	return <a {...rest} className={"text-blue-400 underline hover:cursor-pointer visited:text-purple-500 " + (className ?? "")}></a>;
};
