import { NorGate, nor } from '../../src/LogicGates.mjs';

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
            [[true, true], false],
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
            [[true, true, true], false],
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
            [[true, true, true, true], false],
        ],
    },
];

describe.each(TestCases)('Test NorGate', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            const table = NorGate.create(inputTest[0]);
            expect(table.output).toBe(inputTest[1]);
        });
    });
});

describe.each(TestCases)('Test nor', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            expect(nor(inputTest[0])).toBe(inputTest[1]);
        });
    });
});
