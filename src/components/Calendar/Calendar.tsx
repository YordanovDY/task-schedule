import { useScheduleContext } from '../../contexts/ScheduleContext';
import { Month } from '../../types/Month';
import NextMonth from './buttons/NextMonth';
import PreviousMonth from './buttons/PreviousMonth';
import style from './Calendar.module.css';
import { formatMonth, getDates } from './CalendarUtils';
import { isSameDate } from '../../utils/dateUtil';
import DateItem from './date-item/DateItem';

export default function Calendar() {
    const { month, year, tasks, showDateTasks } = useScheduleContext();
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

    const checkForTasks = (date: number | null, month: Month, year: number): boolean => {
        if (date === null) {
            return false;
        }

        const foundTask = tasks.find(task => isSameDate(new Date(`${year}-${month}-${date}`), task.date));

        return !!foundTask;
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
                                const hasTasks = checkForTasks(date, month, year);
                                const dateSelectHandler = date
                                    ? showDateTasks.bind(null, date, month, year)
                                    : () => { }

                                return <DateItem
                                    key={index}
                                    position={index + 1}
                                    date={date}
                                    isToday={isToday}
                                    hasTasks={hasTasks}
                                    handler={dateSelectHandler}
                                />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}