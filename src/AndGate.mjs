import Gate from './Gate.mjs';

class AndGate extends Gate {
    generateOutput() {
        this.output = this.inputs.every(Boolean);
    }
}

export default AndGate;
