import { AndGate } from '../../src/LogicGates.mjs';

const TestCasesResult = [
    {
        description: '00 = 0',
        input: [false, false],
        expectedResult: false,
    },
    {
        description: '01 = 0',
        input: [false, true],
        expectedResult: false,
    },
    {
        description: '10 = 0',
        input: [true, false],
        expectedResult: false,
    },
    {
        description: '11 = 1',
        input: [true, true],
        expectedResult: true,
    },
    {
        description: '000 = 0',
        input: [false, false, false],
        expectedResult: false,
    },
    {
        description: '010 = 0',
        input: [false, true, false],
        expectedResult: false,
    },
    {
        description: '1111 = 1',
        input: [true, true, true, true],
        expectedResult: true,
    },
];

describe.each(TestCasesResult)(
    'Test and',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = AndGate.create(input);
            expect(table.output).toBe(expectedResult);
        });
    }
);
