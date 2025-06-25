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
				(className?.concat(" ") ?? "") +
				"bg-primary hover:bg-interact w-fit px-4 py-2 text-white transition-colors duration-200 hover:cursor-pointer"
			}
		>
			{children}
		</button>
	);
};
