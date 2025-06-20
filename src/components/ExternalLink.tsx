import type { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";

type Props = DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;

export const ExternalLink: FC<Props> = ({ className, ...rest }) => {
	return (
		<a
			{...rest}
			className={
				"text-blue-400 underline visited:text-purple-500 hover:cursor-pointer " +
				(className ?? "")
			}
		></a>
	);
};
