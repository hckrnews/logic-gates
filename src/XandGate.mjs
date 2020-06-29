import { Arr } from 'array-helpers';
import Gate from './Gate.mjs';

class XandGate extends Gate {
    generateOutput() {
        this.output = new Arr(this.inputs).unique.length <= 1;
    }
}

export default XandGate;
