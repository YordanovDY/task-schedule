import { JSX } from "react";
import { SubmitHandler } from "../../../types/SubmitHandler";

export interface FormProps {
    template: JSX.Element[],
    btnText?: string,
    handler: SubmitHandler,
    title?: string,
}