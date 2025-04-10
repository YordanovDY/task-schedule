import { ReactNode, useState } from "react";
import { ScheduleContext } from "../../contexts/ScheduleContext";
import { Month } from "../../types/MonthType";

interface ScheduleProviderProps {
    children: ReactNode
}

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
    const now = new Date();

    const [month, setMonth] = useState<Month>(now.getMonth() + 1 as Month);
    const [year, setYear] = useState<number>(now.getFullYear());

    const previousMonth = (): void => {
        setMonth(state => {
            if (state === 1) {
                setYear(y => y - 1);
                return 12;
            }

            return state - 1 as Month;
        });
    }

    const nextMonth = (): void => {
        setMonth(state => {
            if (state === 12) {
                setYear(y => y + 1);
                return 1;
            }

            return state + 1 as Month;
        });
    }

    return (
        <ScheduleContext.Provider value={{month, year, previousMonth, nextMonth}}>
            {children}
        </ScheduleContext.Provider>
    );
}