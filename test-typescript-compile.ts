#!/usr/bin/env node

import * as ts from "typescript";
// This will print: `The ts object has keys: ['default']`
console.log("The ts object has keys:", Object.keys(ts));
// This will of course fail
console.log(ts.createProgram(['foobar.ts'], {noEmitOnError: true}).emit());
