import { Arr } from 'array-helpers';
import Gate from './Gate.mjs';

class XandGate extends Gate {
    generateOutput() {
        this.output = new Arr(this.inputs).unique.length <= 1;
    }
}

const xand = (input) => XandGate.create(input).output;

export default XandGate;
export { XandGate, xand };
