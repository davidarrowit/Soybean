import Form from "next/form";
import type { FC } from "react";

import { Button } from "../../components/Button";

export const InputForm: FC = () => {
	return (
		<Form action="/results">
			<label htmlFor="yield" className="hover:cursor-text">
				Soybean Yield:{" "}
			</label>
			<input
				className="bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
				type="number"
				name="yield"
				id="yield"
			/>
			<br />
			<Button type="submit">Submit</Button>
		</Form>
	);
};
