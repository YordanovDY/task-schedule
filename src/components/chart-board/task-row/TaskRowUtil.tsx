import { JSX } from "react";
import { Category, Priority, Status } from "../../../types/Task";
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

export function getPriorityStars(priority: Priority): JSX.Element | null {
    let stars = null;

    switch (priority) {
        case 'Low':
            stars = <span>
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
            </span>
            break;

        case 'Medium':
            stars = <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star-half-stroke" />
                <i className="fa-regular fa-star" />
                <i className="fa-regular fa-star" />
            </span>
            break;

        case 'High':
            stars = <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-regular fa-star" />
            </span>
            break;

        case 'Critical':
            stars = <span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
            </span>
            break;
    }

    return stars;
}

export function getStatusIcon(status: Status): JSX.Element | null {
    let statusIcon = null;

    switch (status) {
        case 'Pending':
            statusIcon = <i className="fa-solid fa-spinner" />
            break;

        case 'In Progress':
            statusIcon = <i className="fa-solid fa-gears" />
            break;

        case 'Completed':
            statusIcon = <i className="fa-solid fa-circle-check" />
            break;
    }

    return statusIcon;
}