import Gate from './Gate.mjs';

class AndGate extends Gate {
    generateOutput() {
        this.output = this.inputs.every(Boolean);
    }
}

const and = (input) => AndGate.create(input).output;

export default AndGate;
export { AndGate, and };
