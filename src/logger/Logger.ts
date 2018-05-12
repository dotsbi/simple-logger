import chalk from 'chalk';

enum ChalkColor {
  PINK,
  RED,
  GREEN,
  BLUE,
  YELLOW,
  GREY,
}

export enum LogLevel {
  OFF = 0,
  FATAL = 1,
  ERROR = 2,
  INFO = 3,
  WARN = 4,
  DEBUG = 5,
  TRACE = 6,
  ALL = 7,
}

function fail(message: string): never {
  throw new Error(message);
}

export class Logger {
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  public fatal(...args: any[]) {
    if (this.logLevel < LogLevel.FATAL) return;
    console.error(
      this.chalk(ChalkColor.PINK, this.prefix(LogLevel.FATAL)),
      ...args,
    );
  }

  public error(...args: any[]) {
    if (this.logLevel < LogLevel.ERROR) return;
    console.error(
      this.chalk(ChalkColor.RED, this.prefix(LogLevel.ERROR)),
      ...args,
    );
  }

  public warn(...args: any[]) {
    if (this.logLevel < LogLevel.WARN) return;
    console.warn(
      this.chalk(ChalkColor.YELLOW, this.prefix(LogLevel.WARN)),
      ...args,
    );
  }

  public info(...args: any[]) {
    if (this.logLevel < LogLevel.INFO) return;
    console.info(
      this.chalk(ChalkColor.GREEN, this.prefix(LogLevel.INFO)),
      ...args,
    );
  }

  public debug(...args: any[]) {
    if (this.logLevel < LogLevel.DEBUG) return;
    console.debug(
      this.chalk(ChalkColor.BLUE, this.prefix(LogLevel.DEBUG)),
      ...args,
    );
  }

  public trace(...args: any[]) {
    if (this.logLevel < LogLevel.TRACE) return;
    const stack = (new Error().stack || '').replace(/^Error/, '');

    console.log(
      this.chalk(ChalkColor.GREY, this.prefix(LogLevel.TRACE)),
      ...args.map(arg => this.chalk(ChalkColor.GREY, arg)),
      stack,
    );
  }

  private chalk(color: ChalkColor, message: string): string {
    let result = '';

    if (color === ChalkColor.PINK) {
      result = chalk.magenta(message);
    } else if (color === ChalkColor.RED) {
      result = chalk.red(message);
    } else if (color === ChalkColor.YELLOW) {
      result = chalk.yellow(message);
    } else if (color === ChalkColor.GREEN) {
      result = chalk.green(message);
    } else if (color === ChalkColor.BLUE) {
      result = chalk.blue(message);
    } else if (color === ChalkColor.GREY) {
      result = chalk.grey(message);
    } else {
      fail(`Unexpected chalk color - ${color}`);
    }

    return result;
  }

  private pad(input: number, digits: number) {
    let output = input.toString();
    if (output.length >= digits) {
      return output;
    }

    while (output.length < digits) {
      output = '0' + output;
    }

    return output;
  }

  private formatDate(date: Date) {
    const month = this.pad(date.getMonth() + 1, 2);
    const day = this.pad(date.getDate(), 2);
    const hours = this.pad(date.getHours(), 2);
    const minutes = this.pad(date.getMinutes(), 2);
    const seconds = this.pad(date.getSeconds(), 2);
    const msec = this.pad(date.getMilliseconds(), 3);
    return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}.${msec}`;
  }

  private prefix(logLevel: LogLevel) {
    return `[${this.formatDate(new Date())}] [${LogLevel[logLevel]}] -`;
  }
}
