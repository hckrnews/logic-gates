import Gate from './Gate.mjs';

class NandGate extends Gate {
    generateOutput() {
        this.output = !this.inputs.every(Boolean);
    }
}

export default NandGate;
