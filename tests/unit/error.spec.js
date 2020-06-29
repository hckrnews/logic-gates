import Gate from '../../src/LogicGates.mjs';
import InvalidInputError from '../../src/InvalidInputError';

const ErrorTestCases = [
    {
        description: 'test inputs with a null value',
        inputs: null,
        expectedError: 'inputs isnt a array of booleans',
    },
    {
        description: 'test inputs with a string',
        inputs: 'not ok',
        expectedError: 'inputs isnt a array of booleans',
    },
    {
        description: 'test inputs with a string',
        inputs: [true, 42],
        expectedError: 'inputs isnt a array of booleans',
    },
    {
        description: 'test inputs with a string',
        inputs: [1],
        expectedError: 'inputs isnt a array of booleans',
    },
    {
        description: 'test inputs with a string',
        inputs: [0],
        expectedError: 'inputs isnt a array of booleans',
    },
    {
        description: 'test inputs with a string',
        inputs: [null],
        expectedError: 'inputs isnt a array of booleans',
    },
];

describe.each(ErrorTestCases)(
    'Test totalTrueInputs helper exception test',
    ({ description, inputs, expectedError }) => {
        it(description, () => {
            function testWrongInput() {
                Gate.create(inputs);
            }

            expect(testWrongInput).toThrowError(new Error(expectedError));
            expect(testWrongInput).toThrowError(InvalidInputError);
        });
    }
);
