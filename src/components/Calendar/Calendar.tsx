import { useScheduleContext } from '../../contexts/ScheduleContext';
import NextMonth from './buttons/NextMonth';
import PreviousMonth from './buttons/PreviousMonth';
import style from './Calendar.module.css';
import { formatMonth, getDates } from './CalendarUtils';
import DateItem from './date-item/DateItem';

export default function Calendar() {
    const { month, year } = useScheduleContext();
    const dates = getDates(month, year);
    const monthLabel = formatMonth(month, year);

    return (
        <>
            <section>
                <nav className={style['calendar-nav']}>
                    <PreviousMonth />
                    <h2>{monthLabel}</h2>
                    <NextMonth />
                </nav>
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