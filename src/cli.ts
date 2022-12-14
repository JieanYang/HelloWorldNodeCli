#!/usr/bin/env node

import { callChucknorris } from './utils/TCall';
import { ELogLevel, logger } from './utils/TLogger';

const main = async (argv: string[]) => {
	const program = require('commander');
	program.option('-v, --verbose', 'show debug log');

	program.parse(argv);

	const options = program.opts();
	if (options.verbose) console.log(options);
	logger.log('this will be cyan text');
	logger.error('this will be red text');
	logger.setLogLevel(ELogLevel.ERROR);
	logger.log('this will be cyan text');
	logger.error('this will be red text');
	const data = await callChucknorris();
	console.log('yang 2');
	console.log('data', data);
};

main(process.argv);
