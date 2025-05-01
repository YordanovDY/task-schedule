import React, { JSX, useState } from "react";
import FormOverlay from "./FormOverlay";
import { SubmitHandler } from "../../../types/SubmitHandler";

export default function useFormOverlay(title: string, template: JSX.Element[], handler: SubmitHandler) {
    const [formOverlay, setFormOverlay] = useState<React.ReactElement | null>(null);

    const closeDialog = () => {
        setFormOverlay(null);
    }

    const openDialog = () => {
        setFormOverlay(<FormOverlay onClose={closeDialog} title={title} template={template} handler={handler} />);
    }

    return { formOverlay, closeDialog, openDialog };
}