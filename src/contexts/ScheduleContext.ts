import { createContext, useContext } from "react";
import { Month } from "../types/Month";
import { Task } from "../types/Task";

interface ScheduleContextProps {
    tasks: Task[],
    month: Month,
    year: number,
    previousMonth: () => void,
    nextMonth: () => void,
}

export const ScheduleContext = createContext<ScheduleContextProps | null>(null);

type useScheduleContextHook = () => ScheduleContextProps;

export const useScheduleContext: useScheduleContextHook = () => {
    const data = useContext(ScheduleContext);
    
    return data as ScheduleContextProps;
}