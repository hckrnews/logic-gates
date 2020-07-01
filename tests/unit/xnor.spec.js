import { XnorGate, xnor } from '../../src/LogicGates.mjs';

const TestCases = [
    {
        description: '1 proposition',
        expectedResult: [
            [[false], true],
            [[true], false],
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
            [[false, true, true], true],
            [[true, false, false], false],
            [[true, false, true], true],
            [[true, true, false], true],
            [[true, true, true], false],
        ],
    },
    {
        description: '4 propositions',
        expectedResult: [
            [[false, false, false, false], true],
            [[false, false, false, true], false],
            [[false, false, true, false], false],
            [[false, false, true, true], true],
            [[false, true, false, false], false],
            [[false, true, false, true], true],
            [[false, true, true, false], true],
            [[false, true, true, true], false],
            [[true, false, false, false], false],
            [[true, false, false, true], true],
            [[true, false, true, false], true],
            [[true, false, true, true], false],
            [[true, true, false, false], true],
            [[true, true, false, true], false],
            [[true, true, true, false], false],
            [[true, true, true, true], true],
        ],
    },
];

describe.each(TestCases)('Test XnorGate', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            const table = XnorGate.create(inputTest[0]);
            expect(table.output).toBe(inputTest[1]);
        });
    });
});

describe.each(TestCases)('Test xnor', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            expect(xnor(inputTest[0])).toBe(inputTest[1]);
        });
    });
});
