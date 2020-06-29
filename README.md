# Logic gates package

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

...

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

All options:
* AndGate
* NandGate
* OrGate
* NorGate
* XorGate
* XnorGate
* XandGate
* XnandGate

[npm-url]: https://www.npmjs.com/package/@hckrnews/logic-gates
[npm-image]: https://img.shields.io/npm/v/@hckrnews/logic-gates.svg
[travis-url]: https://travis-ci.org/hckrnews/logic-gates
[travis-image]: https://img.shields.io/travis/hckrnews/logic-gates/master.svg
[coveralls-url]: https://coveralls.io/r/hckrnews/logic-gates
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/logic-gates/master.svg
