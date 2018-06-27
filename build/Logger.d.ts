export declare enum LogLevel {
    OFF = 0,
    FATAL = 1,
    ERROR = 2,
    INFO = 3,
    WARN = 4,
    DEBUG = 5,
    TRACE = 6,
    ALL = 7,
}
export declare class Logger {
    private logLevel;
    constructor(logLevel: LogLevel);
    fatal(...args: any[]): void;
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    trace(...args: any[]): void;
}
