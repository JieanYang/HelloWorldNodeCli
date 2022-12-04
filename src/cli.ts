#!/usr/bin/env node

import { red } from 'chalk';
import { logger } from './utils';

const main = (argv: string[]) => {
	const program = require('commander');
	program.option('-v, --verbose', 'show debug log');

	program.parse(argv);

	const options = program.opts();
	if (options.verbose) console.log(options);
	logger.log('this will be red text');
};

main(process.argv);
