import { it, expect } from 'vitest';
import { getDates } from '../CalendarUtils';

it('Should starts on Saturday (5 index) and have 28 days', () => {
    const month = getDates(2, 2025);
    const dates = incrementArray(28);

    let expectedResult = [null, null, null, null, null, ...dates];

    expectedResult = [
        ...expectedResult,
        ...new Array(42 - expectedResult.length).fill(null), // Add remaining nulls to make it 42
    ];

    expect(month).toEqual(expectedResult);
});

it('Should starts on Thursday (3 index) and have 29 days', () => {
    const month = getDates(2, 2024);
    const dates = incrementArray(29);

    let expectedResult = [null, null, null, ...dates];

    expectedResult = [
        ...expectedResult,
        ...new Array(42 - expectedResult.length).fill(null), // Add remaining nulls to make it 42
    ];

    expect(month).toEqual(expectedResult);
});

it('Should starts on Thursday (6 index) and have 31 days', () => {
    const month = getDates(12, 2002);
    const dates = incrementArray(31);

    let expectedResult = [null, null, null, null, null, null, ...dates];

    expectedResult = [
        ...expectedResult,
        ...new Array(42 - expectedResult.length).fill(null), // Add remaining nulls to make it 42
    ];

    expect(month).toEqual(expectedResult);
});

function incrementArray(count: number) {
    const numbers: number[] = [];

    for (let i = 1; i <= count; i++) {
        numbers.push(i);
    }

    return numbers;
}