import { red, cyan } from 'chalk';
class Logger {
	log(message: string) {
		console.log(cyan(`Batman: ${message}`));
	}
	error(message: string) {
		console.log(red(`Batman: ${message}`));
	}
}
export const logger = new Logger();
