import InvalidInputError from './InvalidInputError';

class Gate {
    constructor(inputs) {
        if (
            !Array.isArray(inputs) ||
            !inputs.every((item) => typeof item === 'boolean')
        ) {
            throw new InvalidInputError(
                inputs,
                'inputs isnt a array of booleans'
            );
        }

        this.inputs = inputs;
        this.output = [];
    }

    generateOutput() {}

    static create(propositions) {
        const gate = new this(propositions);

        gate.generateOutput();

        return gate;
    }
}

export default Gate;
