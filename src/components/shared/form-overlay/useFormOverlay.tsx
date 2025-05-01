import React, { JSX, useState } from "react";
import FormOverlay from "./FormOverlay";

export default function useFormOverlay(title: string, template: JSX.Element[]) {
    const [formOverlay, setFormOverlay] = useState<React.ReactElement | null>(null);

    const closeDialog = () => {
        setFormOverlay(null);
    }

    const openDialog = () => {
        setFormOverlay(<FormOverlay onClose={closeDialog} title={title} template={template} />);
    }

    return { formOverlay, closeDialog, openDialog };
}