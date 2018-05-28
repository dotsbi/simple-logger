import { Logger, LogLevel } from './Logger';

let LOG_LEVEL: LogLevel = LogLevel.ALL;

if (process) {
  if (process.env.LOG_LEVEL) {
    const LOG_LEVEL_INPUT: string = process.env.LOG_LEVEL!.toUpperCase().trim();
    if ((LogLevel as any)[LOG_LEVEL_INPUT]) {
      LOG_LEVEL = (LogLevel as any)[LOG_LEVEL_INPUT];
    } else {
      // tslint:disable-next-line:no-console
      console.warn(
        `LOG_LEVEL=${process.env.LOG_LEVEL} is not a valid log level.` +
          'Must be one of [OFF, FATAL, ERROR, INFO, WARN, DEBUG, TRACE, ALL]',
      );
    }
  }
}

const logger = new Logger(LOG_LEVEL);

export default logger;
