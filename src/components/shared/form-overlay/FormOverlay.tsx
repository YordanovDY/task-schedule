import { JSX } from "react";
import Form from "../form/Form";

export default function FormOverlay({ onClose, title, template }: { onClose: () => void, title: string, template: JSX.Element[] }) {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50" onClick={(e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        }}>

            <Form template={template} handler={() => { console.log('click.') }} btnText="Create" title={title} />
        </div>
    );
}