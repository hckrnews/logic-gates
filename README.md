# Logic gates package

Generate logic gates without thinking.
You can use this package if you need well tested logic gate checks.
e.g. if all options must be true or false, but don't must be a mix of true and false, you can use the xand gate.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

## Installation

`npm install @hckrnews/logic-gates`
or
`yarn add @hckrnews/logic-gates`

## Test the package

`npm run test`
or
`yarn test`

## Usage

Example usage:
```
import { AndGate } from "@hckrnews/logic-gates";

const gate = AndGate.create([true, true]);
```

Send an array with boolean's to the create method.

Get the gate result:
```
gate.output
```
Output a boolean:
```
true
```

Or use the short syntax:
```
import { and } from "@hckrnews/logic-gates";

and([true, true])
```

Output a boolean:
```
true
```

All options:
- [AndGate](https://en.wikipedia.org/wiki/AND_gate)
- [NandGate](https://en.wikipedia.org/wiki/NAND_gate)
- [OrGate](https://en.wikipedia.org/wiki/OR_gate)
- [NorGate](https://en.wikipedia.org/wiki/NOR_gate)
- [XorGate](https://en.wikipedia.org/wiki/XOR_gate)
- [XnorGate](https://en.wikipedia.org/wiki/XNOR_gate)
- [XandGate](https://en.wiktionary.org/wiki/XAND)
- [XnandGate](https://en.wiktionary.org/wiki/XNAND)
- [NotGate](https://en.wikipedia.org/wiki/NOT_gate)

Short syntax:
- [and](https://en.wikipedia.org/wiki/AND_gate)
- [nand](https://en.wikipedia.org/wiki/NAND_gate)
- [or](https://en.wikipedia.org/wiki/OR_gate)
- [nor](https://en.wikipedia.org/wiki/NOR_gate)
- [xor](https://en.wikipedia.org/wiki/XOR_gate)
- [xnor](https://en.wikipedia.org/wiki/XNOR_gate)
- [xand](https://en.wiktionary.org/wiki/XAND)
- [xnand](https://en.wiktionary.org/wiki/XNAND)
- [not](https://en.wikipedia.org/wiki/NOT_gate)

## And gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 0      |
| 0       | 0       | 1       | 0      |
| 0       | 1       | 0       | 0      |
| 0       | 1       | 1       | 0      |
| 1       | 0       | 0       | 0      |
| 1       | 0       | 1       | 0      |
| 1       | 1       | 0       | 0      |
| 1       | 1       | 1       | 1      |

## Nand gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 1      |
| 0       | 0       | 1       | 1      |
| 0       | 1       | 0       | 1      |
| 0       | 1       | 1       | 1      |
| 1       | 0       | 0       | 1      |
| 1       | 0       | 1       | 1      |
| 1       | 1       | 0       | 1      |
| 1       | 1       | 1       | 0      |

## Or gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 0      |
| 0       | 0       | 1       | 1      |
| 0       | 1       | 0       | 1      |
| 0       | 1       | 1       | 1      |
| 1       | 0       | 0       | 1      |
| 1       | 0       | 1       | 1      |
| 1       | 1       | 0       | 1      |
| 1       | 1       | 1       | 1      |

## Nor gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 1      |
| 0       | 0       | 1       | 0      |
| 0       | 1       | 0       | 0      |
| 0       | 1       | 1       | 0      |
| 1       | 0       | 0       | 0      |
| 1       | 0       | 1       | 0      |
| 1       | 1       | 0       | 0      |
| 1       | 1       | 1       | 0      |

## Xor gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 0      |
| 0       | 0       | 1       | 1      |
| 0       | 1       | 0       | 1      |
| 0       | 1       | 1       | 0      |
| 1       | 0       | 0       | 1      |
| 1       | 0       | 1       | 0      |
| 1       | 1       | 0       | 0      |
| 1       | 1       | 1       | 1      |

## Xnor gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 1      |
| 0       | 0       | 1       | 0      |
| 0       | 1       | 0       | 0      |
| 0       | 1       | 1       | 1      |
| 1       | 0       | 0       | 0      |
| 1       | 0       | 1       | 1      |
| 1       | 1       | 0       | 1      |
| 1       | 1       | 1       | 0      |

## Xand gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 1      |
| 0       | 0       | 1       | 0      |
| 0       | 1       | 0       | 0      |
| 0       | 1       | 1       | 0      |
| 1       | 0       | 0       | 0      |
| 1       | 0       | 1       | 0      |
| 1       | 1       | 0       | 0      |
| 1       | 1       | 1       | 1      |

## Xnand gate

| Input 1 | Input 2 | Input 3 | Output |
| ------- | ------- | ------- | ------ |
| 0       | 0       | 0       | 0      |
| 0       | 0       | 1       | 1      |
| 0       | 1       | 0       | 1      |
| 0       | 1       | 1       | 1      |
| 1       | 0       | 0       | 1      |
| 1       | 0       | 1       | 1      |
| 1       | 1       | 0       | 1      |
| 1       | 1       | 1       | 0      |

## Not gate

| Input 1 | Input 2 | Input 3 | Output  |
| ------- | ------- | ------- | ------- |
| 0       | 0       | 0       | [1,1,1] |
| 0       | 0       | 1       | [1,1,0] |
| 0       | 1       | 0       | [1,0,1] |
| 0       | 1       | 1       | [1,0,0] |
| 1       | 0       | 0       | [0,1,1] |
| 1       | 0       | 1       | [0,1,0] |
| 1       | 1       | 0       | [0,0,1] |
| 1       | 1       | 1       | [0,0,0] |

[npm-url]: https://www.npmjs.com/package/@hckrnews/logic-gates
[npm-image]: https://img.shields.io/npm/v/@hckrnews/logic-gates.svg
[travis-url]: https://travis-ci.org/hckrnews/logic-gates
[travis-image]: https://img.shields.io/travis/hckrnews/logic-gates/master.svg
[coveralls-url]: https://coveralls.io/r/hckrnews/logic-gates
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/logic-gates/master.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/logic-gates/?branch=master
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/logic-gates/badges/quality-score.png?b=master
