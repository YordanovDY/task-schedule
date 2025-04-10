import { useScheduleContext } from '../../contexts/ScheduleContext';
import style from './Calendar.module.css';
import { formatMonth, getDates } from './CalendarUtils';
import DateItem from './DateItem/DateItem';

export default function Calendar() {
    const { month, year } = useScheduleContext();
    const dates = getDates(month, year);
    const monthLabel = formatMonth(month, year);

    return (
        <>
            <section>
                <h2>{monthLabel}</h2>
                <div>
                    <ul className={style['calendar-ul']}>
                        {
                            dates.map((date, index) =>
                                <DateItem key={index} date={date} />)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}