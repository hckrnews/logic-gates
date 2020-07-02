import Gate from './Gate.mjs';

class OrGate extends Gate {
    generateOutput() {
        this.output = this.inputs.some(Boolean);
    }
}

const or = (input) => OrGate.create(input).output;

export default OrGate;
export { OrGate, or };
