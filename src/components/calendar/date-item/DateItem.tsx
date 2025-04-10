import style from '../Calendar.module.css';

interface DateItemProps {
    date: number | null;
}

export default function DateItem({ date }: DateItemProps) {
    return (
        <li className={style['calendar-date']}>{date}</li>
    );
}