import Gate from './Gate.mjs';

class NotGate extends Gate {
    generateOutput() {
        this.output = this.inputs.map(item => !item);
    }
}

export default NotGate;
