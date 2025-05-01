import { JSX } from "react";

export interface FormProps {
    template: JSX.Element[],
    btnText?: string,
    handler: () => void,
    title?: string,
}