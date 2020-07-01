import Gate from './Gate.mjs';

class NandGate extends Gate {
    generateOutput() {
        this.output = !this.inputs.every(Boolean);
    }
}

const nand = input => NandGate.create(input).output;

export default NandGate;
export { NandGate, nand };
