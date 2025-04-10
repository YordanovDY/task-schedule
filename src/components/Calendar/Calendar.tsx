import { useScheduleContext } from '../../contexts/ScheduleContext';
import style from './Calendar.module.css';
import { getDates } from './CalendarUtils';
import DateItem from './DateItem/DateItem';

export default function Calendar() {
    const dates = getDates(2, 2025);
    const { month, year } = useScheduleContext();
    const dates = getDates(month, year);

    return (
        <>
            <section>
                <h2>April 2025</h2>
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