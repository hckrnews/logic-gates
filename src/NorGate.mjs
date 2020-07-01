import Gate from './Gate.mjs';

class NorGate extends Gate {
    generateOutput() {
        this.output = !this.inputs.some(Boolean);
    }
}

const nor = input => NorGate.create(input).output;

export default NorGate;
export { NorGate, nor };
