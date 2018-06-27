import chalk from 'chalk';
import { logPrefix } from './utils';

export enum LogLevel {
  OFF = 0,
  FATAL = 1,
  ERROR = 2,
  INFO = 3,
  WARN = 4,
  DEBUG = 5,
  TRACE = 6,
  ALL = 7
}

export class Logger {
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  public fatal(...args: any[]) {
    if (this.logLevel > LogLevel.FATAL) {
      // tslint:disable-next-line:no-console
      console.error(chalk.magenta(logPrefix()), ...args);
    }
  }

  public error(...args: any[]) {
    if (this.logLevel > LogLevel.ERROR) {
      // tslint:disable-next-line:no-console
      console.error(chalk.red(logPrefix()), ...args);
    }
  }

  public warn(...args: any[]) {
    if (this.logLevel > LogLevel.WARN) {
      // tslint:disable-next-line:no-console
      console.warn(chalk.yellow(logPrefix()), ...args);
    }
  }

  public info(...args: any[]) {
    if (this.logLevel > LogLevel.INFO) {
      // tslint:disable-next-line:no-console
      console.info(chalk.green(logPrefix()), ...args);
    }
  }

  public debug(...args: any[]) {
    if (this.logLevel > LogLevel.DEBUG) {
      // tslint:disable-next-line:no-console
      console.debug(chalk.blue(logPrefix()), ...args);
    }
  }

  public trace(...args: any[]) {
    if (this.logLevel > LogLevel.TRACE) {
      // tslint:disable-next-line:no-console
      console.log(chalk.grey(logPrefix(), ...args));
    }
  }
}
