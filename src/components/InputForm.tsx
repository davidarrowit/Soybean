import { FC } from "react";
import Form from "next/form";

export const InputForm: FC = () => {
	return (
		<Form action="/results">
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text"
				name="yield"
				id="yield"
			/>
			<button type="submit">Submit</button>
		</Form>
	);
};
