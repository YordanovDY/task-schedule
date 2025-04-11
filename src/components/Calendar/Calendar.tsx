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

    const checkIsToday = (date: number | null): boolean => {
        if (date === null) {
            return false
        }

        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const currentDate = now.getDate();

        if (year === currentYear && month === currentMonth && date === currentDate) {
            return true
        }

        return false;
    }

    return (
        <>
            <section className="d-flex f-direction-column gap-10 padding-20">
                <nav className={style['calendar-nav']}>
                    <PreviousMonth />
                    <h2>{monthLabel}</h2>
                    <NextMonth />
                </nav>
                <div>
                    <ul className={style['calendar-ul']}>
                        <li className={style['day-of-week']}>Monday</li>
                        <li className={style['day-of-week']}>Tuesday</li>
                        <li className={style['day-of-week']}>Wednesday</li>
                        <li className={style['day-of-week']}>Thursday</li>
                        <li className={style['day-of-week']}>Friday</li>
                        <li className={style['day-of-week']}>Saturday</li>
                        <li className={style['day-of-week']}>Sunday</li>
                        {
                            dates.map((date, index) => {
                                const isToday = checkIsToday(date);
                                return <DateItem key={index} position={index + 1} date={date} isToday={isToday} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}