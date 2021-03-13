#!/usr/bin/env node

// Following https://nodejs.org/api/module.html#module_module_createrequire_filename
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const ts = require("typescript");
// This will print: `The ts object has keys: <lots of them>`
console.log("The ts object has keys:", Object.keys(ts));
// This will succeed!
console.log(ts.createProgram(['foobar.ts'], {noEmitOnError: true}).emit());
// The problem is that the 'ts' object is of type any, so (for example)
// the following typo won't be caught at compile time:
console.log(ts.createProogram(['foobar.ts'], {noEmitOnError: true}).emit());
