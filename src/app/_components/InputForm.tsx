import Form from "next/form";
import type { FC } from "react";

import { Button } from "@components/Button";

export const InputForm: FC = () => {
	return (
		<Form action="/results">
			<div className="flex flex-row gap-2 items-center mb-4">
				<label htmlFor="yield" className="hover:cursor-text text-xl">
					Soybean Yield:
				</label>
				<input
					className="bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
					type="number"
					step="any"
					name="yield"
					id="yield"
				/>
				<span className="text-xl">bu/ac</span>
			</div>
			<Button type="submit">Submit</Button>
		</Form>
	);
};
