import { Dates, GetDatesFn } from "./CalendarTypes";

export const getDates: GetDatesFn = (month, year) => {
    const daysCount = new Date(year, month, 0).getDate();
    const firstDayZeroIndex = new Date(year, month - 1, 1).getDay();

    let firstDay: number = firstDayZeroIndex;

    if (firstDayZeroIndex === 0) {
        firstDay = 7;
    }

    const dates: Dates = [];

    let currentDate = 1;
    for (let index = 1; index <= 42; index++) {

        if (index >= firstDay && currentDate <= daysCount) {
            dates.push(currentDate++);

        } else {
            dates.push(null);
        }
    }

    return dates;
};