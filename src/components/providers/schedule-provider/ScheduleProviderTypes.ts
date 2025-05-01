import { ReactNode } from "react";
import { Month } from "../../../types/Month";
import { RequestTask, Task } from "../../../types/Task";

export interface ScheduleProviderProps {
    children: ReactNode
}

export interface DateState {
    month: Month,
    year: number
}

export type DateAction = { type: 'NEXT_MONTH' } | { type: 'PREVIOUS_MONTH' };


export interface SelectedDateState {
    date: number,
    month: Month,
    year: number,
    tasks: Task[],
}

export type ScheduleHook = {
    tasks: Task[],
    pendingTasks: boolean,
    changeMonth: (period: string) => void,
    createTask: (data: RequestTask) => Promise<Task | void>,
}

export type SelectedDateAction = { type: 'SELECT_DATE', date: number, month: Month, year: number };