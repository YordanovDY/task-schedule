import { useReducer } from "react";
import { ScheduleContext } from "../../../contexts/ScheduleContext";
import { Month } from "../../../types/Month";
import { DateAction, DateState, ScheduleProviderProps } from "./ScheduleProviderTypes";
import { Task } from "../../../types/Task";

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

    const [date, dispatch] = useReducer(dateReducer, { month: now.getMonth() + 1 as Month, year: now.getFullYear() });

    const previousMonth = (): void => {
        dispatch({ type: 'PREVIOUS_MONTH' });
    }

    const nextMonth = (): void => {
        dispatch({ type: 'NEXT_MONTH' });
    }

    const { month, year } = date;

    // ! TESTING PURPOSES ONLY
    const tasks: Task[] = [
        {
            id: '3c67c01d-0b0f-4a8e-bf4a-fbd982c5419e',
            date: new Date('2025-04-10'),
            category: 'Testing',
            status: 'Pending',
            priority: 'Medium',
            description: 'Outline roadmap for Q2 product updates and features.',
        },
        {
            id: '9f3b8a4e-8a32-45a1-b8ae-6201cfc9c2ae',
            date: new Date('2025-04-11'),
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
            date: new Date('2025-04-11'),
            category: 'Meeting',
            status: 'Completed',
            priority: 'Medium',
            description: 'Sprint planning session with product and engineering teams.',
        }
    ];
    //! ----------------------

    return (
        <ScheduleContext.Provider value={{ tasks, month, year, previousMonth, nextMonth }}>
            {children}
        </ScheduleContext.Provider>
    );
}