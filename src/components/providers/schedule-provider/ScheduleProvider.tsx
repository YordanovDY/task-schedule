import { useReducer } from "react";
import { ScheduleContext } from "../../../contexts/ScheduleContext";
import { Month } from "../../../types/Month";
import { DateAction, DateState, ScheduleProviderProps, SelectedDateAction, SelectedDateState } from "./ScheduleProviderTypes";
import { Task } from "../../../types/Task";
import { isSameDate } from "../../../utils/dateUtil";

// ! TESTING PURPOSES ONLY
const tasks: Task[] = [
    {
        id: '3c67c01d-0b0f-4a8e-bf4a-fbd982c5419e',
        date: new Date('2025-04-10 10:00'),
        category: 'Testing',
        status: 'Pending',
        priority: 'Medium',
        description: 'Outline roadmap for Q2 product updates and features.',
    },
    {
        id: '3c67hd1d-0b3f-4a8e-bf1a-fbd932c5419e',
        date: new Date('2025-04-10 16:00'),
        category: 'Documentation',
        status: 'In Progress',
        priority: 'Low',
        description: 'Write a documentation for the project',
    },
    {
        id: '9f3b8a4e-8a32-45a1-b8ae-6201cfc9c2ae',
        date: new Date('2025-04-12'),
        category: 'Deployment',
        status: 'In Progress',
        priority: 'High',
        description: 'Develop authentication flow with OAuth integration.',
    },
    {
        id: '71acbcb1-dff5-4b0f-a0c2-f738d616c79b',
        date: new Date('2025-04-09'),
        category: 'Planning',
        status: 'Pending',
        priority: 'Critical',
        description: 'Investigate and resolve API timeout errors affecting checkout.',
    },
    {
        id: 'aed91fc1-147f-42c1-b449-cb1e504b6e2b',
        date: new Date('2025-04-08'),
        category: 'Learning',
        status: 'Completed',
        priority: 'Low',
        description: 'Watch TypeScript best practices course on frontendmasters.',
    },
    {
        id: 'e1dbedb8-0f91-40f1-b72f-b0b6e4d7358f',
        date: new Date('2025-03-11'),
        category: 'Meeting',
        status: 'Completed',
        priority: 'Medium',
        description: 'Sprint planning session with product and engineering teams.',
    }
];
//! ----------------------

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
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