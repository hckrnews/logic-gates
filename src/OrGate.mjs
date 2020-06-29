import Gate from './Gate.mjs';

class OrGate extends Gate {
    generateOutput() {
        this.output = this.inputs.some(Boolean);
    }
}

export default OrGate;
