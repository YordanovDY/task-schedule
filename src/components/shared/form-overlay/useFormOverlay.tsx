import React, { useState } from "react";
import FormOverlay from "./FormOverlay";

export default function useFormOverlay() {
    const [formOverlay, setFormOverlay] = useState<React.ReactElement | null>(null);

    const closeDialog = () => {
        setFormOverlay(null);
    }

    const openDialog = () => {
        setFormOverlay(<FormOverlay onClose={closeDialog} />);
    }

    return { formOverlay, closeDialog, openDialog };
}