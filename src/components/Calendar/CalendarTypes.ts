import { NrRange } from "ts-number-range"

type Month = NrRange<1, 13>;

export type Dates = (number | null)[];

export type GetDatesFn = (month: Month, year: number) => Dates;