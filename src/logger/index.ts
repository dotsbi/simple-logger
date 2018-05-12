import { LogLevel, Logger } from './Logger';

let LOG_LEVEL: LogLevel = LogLevel.ALL;

if (process && process.env && process.env.LOG_LEVEL) {
  let LOG_LEVEL_INPUT: string = process.env.LOG_LEVEL.toUpperCase();
  LOG_LEVEL = LogLevel[LOG_LEVEL_INPUT];
}

const logger = new Logger(LOG_LEVEL);
export default logger;
