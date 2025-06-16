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
				"bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-lg px-4 py-2 hover:cursor-pointer w-fit" +
				(className ?? "")
			}
		>
			{children}
		</button>
	);
};
