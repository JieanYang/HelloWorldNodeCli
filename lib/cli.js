#!/usr/bin/env node
"use strict";
const main = (argv) => {
    const program = require('commander');
    program.option('-v, --verbose', 'show debug log');
    program.parse(argv);
    const options = program.opts();
    if (options.verbose)
        console.log(options);
};
main(process.argv);
