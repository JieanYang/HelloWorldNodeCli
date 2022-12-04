#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const main = (argv) => {
    const program = require('commander');
    program.option('-v, --verbose', 'show debug log');
    program.parse(argv);
    const options = program.opts();
    if (options.verbose)
        console.log(options);
    console.log((0, chalk_1.red)('this will be red text'));
};
main(process.argv);
