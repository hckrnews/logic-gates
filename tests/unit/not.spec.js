import { NotGate } from '../../src/LogicGates.mjs';

const TestCasesResult = [
    {
        description: '00 = 11',
        input: [false, false],
        expectedResult: [true, true],
    },
    {
        description: '01 = 10',
        input: [false, true],
        expectedResult: [true, false],
    },
    {
        description: '10 = 01',
        input: [true, false],
        expectedResult: [false, true],
    },
    {
        description: '11 = 00',
        input: [true, true],
        expectedResult: [false, false],
    },
    {
        description: '000 = 111',
        input: [false, false, false],
        expectedResult: [true, true, true],
    },
    {
        description: '010 = 101',
        input: [false, true, false],
        expectedResult: [true, false, true],
    },
    {
        description: '1111 = 0000',
        input: [true, true, true, true],
        expectedResult: [false, false, false, false],
    },
];

describe.each(TestCasesResult)(
    'Test not',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = NotGate.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
