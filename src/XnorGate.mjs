import Gate from './Gate.mjs';
import Helper from './Helper';

class XnorGate extends Gate {
    generateOutput() {
        this.output = Helper.totalTrueInputs(this.inputs) % 2 === 0;
    }
}

const xnor = input => XnorGate.create(input).output;

export default XnorGate;
export { XnorGate, xnor };
