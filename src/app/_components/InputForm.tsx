import { type Dispatch, type SetStateAction, type FC, useState } from "react";

import { Button } from "@components/Button";

type Props = {
	setSoybeanYield: Dispatch<SetStateAction<number | undefined>>;
};

export const InputForm: FC<Props> = ({ setSoybeanYield }) => {
	const [text, setText] = useState("");

	return (
		<form
			onSubmit={() => {
				setSoybeanYield(Number.parseFloat(text));
			}}
		>
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
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
					<span className="text-xl">bu/a</span>
				</div>
			</div>
			<Button type="submit">Submit</Button>
		</form>
	);
};
