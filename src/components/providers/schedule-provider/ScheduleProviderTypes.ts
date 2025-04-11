import { ReactNode } from "react";
import { Month } from "../../../types/Month";

export interface ScheduleProviderProps {
    children: ReactNode
}

export interface DateState {
    month: Month,
    year: number
}

export type DateAction = { type: 'NEXT_MONTH' } | { type: 'PREVIOUS_MONTH' };