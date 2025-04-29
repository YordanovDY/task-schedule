import { useReducer } from "react";
import { ScheduleContext } from "../../../contexts/ScheduleContext";
import { Month } from "../../../types/Month";
import { DateAction, DateState, ScheduleProviderProps, SelectedDateAction, SelectedDateState } from "./ScheduleProviderTypes";
import { Task } from "../../../types/Task";
import { isSameDate } from "../../../utils/dateUtil";
import { useSchedule } from "./ScheduleApi";

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
    const { tasks, pendingTasks } = useSchedule('2025-04');
    const now = new Date();

    const dateReducer = (state: DateState, action: DateAction): DateState => {
        switch (action.type) {
            case 'PREVIOUS_MONTH':
                if (state.month === 1) {
                    return { month: 12, year: state.year - 1 }
                }

                return { month: state.month - 1 as Month, year: state.year }

            case 'NEXT_MONTH':
                if (state.month === 12) {
                    return { month: 1, year: state.year + 1 }
                }

                return { month: state.month + 1 as Month, year: state.year };


            default:
                return state;
        }
    }

    const [date, dispatchDate] = useReducer(dateReducer, { month: now.getMonth() + 1 as Month, year: now.getFullYear() });

    const previousMonth = (): void => {
        dispatchDate({ type: 'PREVIOUS_MONTH' });
    }

    const nextMonth = (): void => {
        dispatchDate({ type: 'NEXT_MONTH' });
    }

    const getTasks = (date: number, month: Month, year: number): Task[] => {
        const taskList = tasks.filter(task => isSameDate(task.date, new Date(`${year}-${month}-${date}`)));
        return taskList;
    }

    const { month, year } = date;


    const selectedDateReducer = (state: SelectedDateState, action: SelectedDateAction) => {
        switch (action.type) {
            case 'SELECT_DATE':
                return {
                    date: action.date,
                    month: action.month,
                    year: action.year,
                    tasks: getTasks(action.date, action.month, action.year)
                }

            default:
                return state;
        }
    }

    const [selectedDate, dispatchSelectedDate] = useReducer(selectedDateReducer, {
        month: now.getMonth() + 1 as Month,
        year: now.getFullYear(),
        date: now.getDate(),
        tasks: getTasks(now.getDate(), now.getMonth() + 1 as Month, now.getFullYear())
    });

    const showDateTasks = (date: number, month: Month, year: number) => {
        dispatchSelectedDate({ type: 'SELECT_DATE', date, month, year });
    }

    return (
        <ScheduleContext.Provider
            value={{
                tasks,
                pendingTasks,
                month,
                year,
                selectedDate,
                previousMonth,
                nextMonth,
                showDateTasks
            }}>
            {children}
        </ScheduleContext.Provider>
    );
}