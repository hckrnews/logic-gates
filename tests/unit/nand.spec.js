import { NandGate } from '../../src/LogicGates.mjs';

const TestCasesResult = [
    {
        description: '00 = 1',
        input: [false, false],
        expectedResult: true,
    },
    {
        description: '01 = 1',
        input: [false, true],
        expectedResult: true,
    },
    {
        description: '10 = 1',
        input: [true, false],
        expectedResult: true,
    },
    {
        description: '11 = 0',
        input: [true, true],
        expectedResult: false,
    },
    {
        description: '000 = 1',
        input: [false, false, false],
        expectedResult: true,
    },
    {
        description: '010 = 1',
        input: [false, true, false],
        expectedResult: true,
    },
    {
        description: '1111 = 0',
        input: [true, true, true, true],
        expectedResult: false,
    },
];

describe.each(TestCasesResult)(
    'Test nand',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = NandGate.create(input);
            expect(table.output).toBe(expectedResult);
        });
    }
);
