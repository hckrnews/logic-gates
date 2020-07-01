import { NotGate, not } from '../../src/LogicGates.mjs';

const TestCases = [
    {
        description: '1 proposition',
        expectedResult: [
            [[false], [true]],
            [[true], [false]],
        ],
    },
    {
        description: '2 propositions',
        expectedResult: [
            [
                [false, false],
                [true, true],
            ],
            [
                [false, true],
                [true, false],
            ],
            [
                [true, false],
                [false, true],
            ],
            [
                [true, true],
                [false, false],
            ],
        ],
    },
    {
        description: '3 propositions',
        expectedResult: [
            [
                [false, false, false],
                [true, true, true],
            ],
            [
                [false, false, true],
                [true, true, false],
            ],
            [
                [false, true, false],
                [true, false, true],
            ],
            [
                [false, true, true],
                [true, false, false],
            ],
            [
                [true, false, false],
                [false, true, true],
            ],
            [
                [true, false, true],
                [false, true, false],
            ],
            [
                [true, true, false],
                [false, false, true],
            ],
            [
                [true, true, true],
                [false, false, false],
            ],
        ],
    },
    {
        description: '4 propositions',
        expectedResult: [
            [
                [false, false, false, false],
                [true, true, true, true],
            ],
            [
                [false, false, false, true],
                [true, true, true, false],
            ],
            [
                [false, false, true, false],
                [true, true, false, true],
            ],
            [
                [false, false, true, true],
                [true, true, false, false],
            ],
            [
                [false, true, false, false],
                [true, false, true, true],
            ],
            [
                [false, true, false, true],
                [tue, false, true, false],
            ],
            [
                [false, true, true, false],
                [true, false, false, true],
            ],
            [
                [false, true, true, true],
                [true, false, false, false],
            ],
            [
                [true, false, false, false],
                [false, true, true, true],
            ],
            [
                [true, false, false, true],
                [false, true, true, false],
            ],
            [
                [true, false, true, false],
                [false, true, false, true],
            ],
            [
                [true, false, true, true],
                [false, true, false, false],
            ],
            [
                [true, true, false, false],
                [false, false, true, true],
            ],
            [
                [true, true, false, true],
                [false, false, true, false],
            ],
            [
                [true, true, true, false],
                [false, false, false, true],
            ],
            [
                [true, true, true, true],
                [false, false, false, false],
            ],
        ],
    },
];

describe.each(TestCases)('Test NotGate', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            const table = NotGate.create(inputTest[0]);
            expect(table.output).toMatchObject(inputTest[1]);
        });
    });
});

describe.each(TestCases)('Test not', ({ description, expectedResult }) => {
    it(description, () => {
        expectedResult.forEach(inputTest => {
            expect(not(inputTest[0])).toMatchObject(inputTest[1]);
        });
    });
});
