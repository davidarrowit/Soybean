import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export const Button: FC<Props> = ({ children, className, ...rest }) => {
	return (
		<button
			{...rest}
			className={
				"w-fit rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 " +
				(className ?? "")
			}
		>
			{children}
		</button>
	);
};
