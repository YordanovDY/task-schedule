import { createContext, useContext } from "react";
import { Month } from "../types/Month";
import { Task } from "../types/Task";
import { SelectedDateState } from "../components/providers/schedule-provider/ScheduleProviderTypes";

interface ScheduleContextProps {
    tasks: Task[],
    month: Month,
    selectedDate: SelectedDateState,
    year: number,
    previousMonth: () => void,
    nextMonth: () => void,
    showDateTasks: (date: number, month: Month, year: number) => void,
}

export const ScheduleContext = createContext<ScheduleContextProps | null>(null);

type useScheduleContextHook = () => ScheduleContextProps;

export const useScheduleContext: useScheduleContextHook = () => {
    const data = useContext(ScheduleContext);

    return data as ScheduleContextProps;
}