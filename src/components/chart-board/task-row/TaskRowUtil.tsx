import { JSX } from "react";
import { Category } from "../../../types/Task";
import { getStyleByCategory } from "../../../utils/styleUtil";
import style from "../ChartBoard.module.css";

export function getClasses(category: Category): string[] {
    const classes = [style['task-row']];

    const styleClass = getStyleByCategory(category);
    classes.push(style[styleClass]);

    return classes;
}

export function getCategoryIcon(category: Category): JSX.Element | null {
    let icon = null;

    switch (category) {
        case 'Deployment':
            icon = <i className="fa-brands fa-docker" />
            break;

        case 'Documentation':
            icon = <i className="fa-solid fa-file-word" />
            break;

        case 'Implementation':
            icon = <i className="fa-solid fa-screwdriver-wrench" />
            break;

        case 'Learning':
            icon = <i className="fa-solid fa-book-bookmark" />
            break;

        case 'Meeting':
            icon = <i className="fa-solid fa-handshake" />
            break;

        case 'Planning':
            icon = <i className="fa-solid fa-pencil" />
            break;

        case 'Problem Solving':
            icon = <i className="fa-solid fa-puzzle-piece" />
            break;

        case 'Testing':
            icon = <i className="fa-solid fa-vial" />
            break;
    }

    return icon;
}