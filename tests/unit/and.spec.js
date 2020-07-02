import { AndGate, and } from '../../src/LogicGates.mjs';

const TestCases = [
    {
        description: '1 proposition',
        expectedResult: [
            [[false], false],
            [[true], true],
        ],
    },
    {
        description: '2 propositions',
        expectedResult: [
            [[false, false], false],
            [[false, true], false],
            [[true, false], false],
            [[true, true], true],
        ],
    },
    {
        description: '3 propositions',
        expectedResult: [
            [[false, false, false], false],
            [[false, false, true], false],
            [[false, true, false], false],
            [[false, true, true], false],
            [[true, false, false], false],
            [[true, false, true], false],
            [[true, true, false], false],
            [[true, true, true], true],
        ],
    },
    {
        description: '4 propositions',
        expectedResult: [
            [[false, false, false, false], false],
            [[false, false, false, true], false],
            [[false, false, true, false], false],
            [[false, false, true, true], false],
            [[false, true, false, false], false],
            [[false, true, false, true], false],
            [[false, true, true, false], false],
            [[false, true, true, true], false],
            [[true, false, false, false], false],
            [[true, false, false, true], false],
            [[true, false, true, false], false],
            [[true, false, true, true], false],
            [[true, true, false, false], false],
            [[true, true, false, true], false],
            [[true, true, true, false], false],
            [[true, true, true, true], true],
        ],
    },
];

describe.each(TestCases)('Test AndGate', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach((inputTest) => {
            const table = AndGate.create(inputTest[0]);
            expect(table.output).toBe(inputTest[1]);
        });
    });
});

describe.each(TestCases)('Test and', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach((inputTest) => {
            expect(and(inputTest[0])).toBe(inputTest[1]);
        });
    });
});
