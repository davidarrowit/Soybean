import { FC } from "react";
import Form from "next/form"

export const InputForm: FC = () => {
    return (
        <Form action="/results">
            <input type="text" name="yield" id="yield" />
            <button type="submit">Submit</button>
        </Form>
    )
}