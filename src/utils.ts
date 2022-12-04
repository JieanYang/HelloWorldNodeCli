import { red, cyan } from 'chalk';
class Logger {
	private __level: ELogLevel = 0;

	log(message: string) {
		if (this.__level <= ELogLevel.DEBUG) {
			console.log(cyan(`Batman: ${message}`));
		}
	}
	error(message: string) {
		console.log(red(`Batman: ${message}`));
	}

	setLogLevel(level: ELogLevel) {
		this.__level = level;
	}
}

export enum ELogLevel {
	DEBUG,
	LOG,
	WARN,
	ERROR
}
export const logger = new Logger();
