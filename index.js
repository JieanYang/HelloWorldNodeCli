#!/usr/bin/env node

/**
 * chuckNorris
 * Get a joke from the Chuck Norris API
 *
 * @author Jiean Yang <https://wemediaweb.com/>
 */

const init = require('./demo/init');
const cli = require('./demo/cli');
const log = require('./demo/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

const main = async () => {
	init({ clear });
	console.log('input', input);
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
};

main();
