import "./globals.css";

import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

export const metadata: Metadata = {
	title: "Soybean Yield Calculator",
	description: "Calculates nutrient removal from soybean yield",
};

type Props = {
	children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
};

export default RootLayout;
