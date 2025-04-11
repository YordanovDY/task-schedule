import { Month } from "../../types/Month";

export type Dates = (number | null)[];

export type GetDatesFn = (month: Month, year: number) => Dates;

export type FormatMonthFn = (month: Month, year: number) => string;