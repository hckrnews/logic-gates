import Gate from './Gate.mjs';

class NorGate extends Gate {
    generateOutput() {
        this.output = !this.inputs.some(Boolean);
    }
}

export default NorGate;
