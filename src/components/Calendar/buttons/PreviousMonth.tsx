import { useScheduleContext } from "../../../contexts/ScheduleContext";
import style from './CalendarButtons.module.css';

export default function PreviousMonth() {
    const { previousMonth } = useScheduleContext();

    return (
        <button className={style['nav-btn']} onClick={previousMonth}><i className="fa-solid fa-angles-left" /></button>
    );
}