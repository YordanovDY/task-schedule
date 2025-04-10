import { Month } from "../../types/MonthType";

export type Dates = (number | null)[];

export type GetDatesFn = (month: Month, year: number) => Dates;
