import style from '../Calendar.module.css';

interface DateItemProps {
    date: number | null;
    position: number;
    isToday: boolean;
}

export default function DateItem({ date, position, isToday }: DateItemProps) {
    const classNames = getClassName(date, position, isToday);

    return (
        <li className={classNames.join(' ')}>{date}</li>
    );
}

function getClassName(date: number | null, position: number, isToday: boolean): string[] {
    const classes: string[] = [style['calendar-date']];
    const weekendPositions = [6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42];

    if (isToday) {
        classes.push(style['calendar-date-today']);
    }

    if (!date) {
        classes.push(style['calendar-date-inactive'])
        return classes;
    }

    if (weekendPositions.includes(position)) {
        classes.push(style['calendar-date-weekend'])
        return classes;
    }

    return classes;
}