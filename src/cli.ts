#!/usr/bin/env node

import chalk from 'chalk';

const main = (argv: string[]) => {
	const program = require('commander');
	program.option('-v, --verbose', 'show debug log');

	program.parse(argv);

	const options = program.opts();
	if (options.verbose) console.log(options);
	console.log(chalk.red('this will be red text'));
};

main(process.argv);
