#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const main = (argv) => {
    const program = require('commander');
    program.option('-v, --verbose', 'show debug log');
    program.parse(argv);
    const options = program.opts();
    if (options.verbose)
        console.log(options);
    console.log(chalk_1.default.red('this will be red text'));
};
main(process.argv);
