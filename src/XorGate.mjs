import Gate from './Gate.mjs';
import Helper from './Helper';

class XorGate extends Gate {
    generateOutput() {
        this.output = Helper.totalTrueInputs(this.inputs) % 2 === 1;
    }
}

const xor = (input) => XorGate.create(input).output;

export default XorGate;
export { XorGate, xor };
