import { useScheduleContext } from "../../../contexts/ScheduleContext";
import style from './CalendarButtons.module.css';

export default function NextMonth() {
    const { nextMonth } = useScheduleContext();

    return (
        <button className={style['nav-btn']} onClick={nextMonth}><i className="fa-solid fa-angles-right" /></button>
    );
}