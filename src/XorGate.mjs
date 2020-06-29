import Gate from './Gate.mjs';
import Helper from './Helper';

class XorGate extends Gate {
    generateOutput() {
        this.output = Helper.totalTrueInputs(this.inputs) % 2 === 1;
    }
}

export default XorGate;
