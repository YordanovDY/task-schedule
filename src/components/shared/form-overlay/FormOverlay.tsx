import { JSX } from "react";
import Form from "../form/Form";
import { SubmitHandler } from "../../../types/SubmitHandler";

export default function FormOverlay({
    onClose,
    title,
    template,
    handler }: {
        onClose: () => void,
        handler: SubmitHandler,
        title: string,
        template: JSX.Element[]
    }) {

    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50" onClick={(e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        }}>

            <Form template={template} handler={handler} btnText="Create" title={title} />
        </div>
    );
}