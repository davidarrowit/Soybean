import Form from "next/form";
import type { FC } from "react";

import { Button } from "@components/Button";

export const InputForm: FC = () => {
	return (
		<Form action="/results">
			<div className="mb-4 flex flex-col gap-4">
				<label htmlFor="yield" className="text-xl hover:cursor-text">
					Enter your yield or yield goal to see what nutrients are removed:
				</label>
				<div className="flex flex-row items-center gap-2">
					<input
						className="rounded-lg border border-gray-300 bg-gray-100 p-2 focus:border-blue-500 focus:ring-blue-500"
						type="number"
						step="any"
						required
						name="yield"
						id="yield"
					/>
					<span className="text-xl">bu/a</span>
				</div>
			</div>
			<Button type="submit">Submit</Button>
		</Form>
	);
};
