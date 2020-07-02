import { XandGate, xand } from '../../src/LogicGates.mjs';

const TestCases = [
    {
        description: '1 proposition',
        expectedResult: [
            [[false], true],
            [[true], true],
        ],
    },
    {
        description: '2 propositions',
        expectedResult: [
            [[false, false], true],
            [[false, true], false],
            [[true, false], false],
            [[true, true], true],
        ],
    },
    {
        description: '3 propositions',
        expectedResult: [
            [[false, false, false], true],
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
            [[false, false, false, false], true],
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

describe.each(TestCases)('Test XandGate', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach((inputTest) => {
            const table = XandGate.create(inputTest[0]);
            expect(table.output).toBe(inputTest[1]);
        });
    });
});

describe.each(TestCases)('Test xand', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach((inputTest) => {
            expect(xand(inputTest[0])).toBe(inputTest[1]);
        });
    });
});
