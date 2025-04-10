import { ReactNode, useReducer } from "react";
import { ScheduleContext } from "../../contexts/ScheduleContext";
import { Month } from "../../types/MonthType";

interface ScheduleProviderProps {
    children: ReactNode
}

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
    const now = new Date();

    interface DateState {
        month: Month,
        year: number
    }

    type DateAction = { type: 'NEXT_MONTH' } | { type: 'PREVIOUS_MONTH' };

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

    return (
        <ScheduleContext.Provider value={{ month, year, previousMonth, nextMonth }}>
            {children}
        </ScheduleContext.Provider>
    );
}