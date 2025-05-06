import { ReactNode } from "react";
import { Month } from "../../../types/Month";
import { RequestTask, Status, Task } from "../../../types/Task";

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
    appendTask: (newTask: Task) => void,
    modifyTask: (task: Task) => void,
    modifyTaskStatusRequest: (taskId: string, status: Status) => Promise<Task | void>
    setPending: (isPending: boolean) => void
}

export type SelectedDateAction = {
    type: 'SELECT_DATE' | 'UPDATE_STATUS',
    date: number,
    month: Month,
    year: number,
    taskId?: string
};