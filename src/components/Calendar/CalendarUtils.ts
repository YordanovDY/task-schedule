import { Dates, FormatMonthFn, GetDatesFn } from "./CalendarTypes";

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

export const formatMonth: FormatMonthFn = (month, year) => {
    let monthName = '';

    switch (month) {
        case 1:
            monthName = 'January'
            break;
        case 2:
            monthName = 'February'
            break;
        case 3:
            monthName = 'March'
            break;
        case 4:
            monthName = 'April'
            break;
        case 5:
            monthName = 'May'
            break;
        case 6:
            monthName = 'June'
            break;
        case 7:
            monthName = 'July'
            break;
        case 8:
            monthName = 'August'
            break;
        case 9:
            monthName = 'September'
            break;
        case 10:
            monthName = 'October'
            break;
        case 11:
            monthName = 'November'
            break;
        case 12:
            monthName = 'December'
            break;
    }

    return `${monthName} ${year}`;
}