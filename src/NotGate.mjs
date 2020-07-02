import Gate from './Gate.mjs';

class NotGate extends Gate {
    generateOutput() {
        this.output = this.inputs.map((item) => !item);
    }
}

const not = (input) => NotGate.create(input).output;

export default NotGate;
export { NotGate, not };
