"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const utils_1 = require("./utils");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["OFF"] = 0] = "OFF";
    LogLevel[LogLevel["FATAL"] = 1] = "FATAL";
    LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
    LogLevel[LogLevel["INFO"] = 3] = "INFO";
    LogLevel[LogLevel["WARN"] = 4] = "WARN";
    LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 6] = "TRACE";
    LogLevel[LogLevel["ALL"] = 7] = "ALL";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    constructor(logLevel) {
        this.logLevel = logLevel;
    }
    fatal(...args) {
        if (this.logLevel > LogLevel.FATAL) {
            // tslint:disable-next-line:no-console
            console.error(chalk_1.default.magenta(utils_1.logPrefix(LogLevel.FATAL)), ...args);
        }
    }
    error(...args) {
        if (this.logLevel > LogLevel.ERROR) {
            // tslint:disable-next-line:no-console
            console.error(chalk_1.default.red(utils_1.logPrefix(LogLevel.ERROR)), ...args);
        }
    }
    warn(...args) {
        if (this.logLevel > LogLevel.WARN) {
            // tslint:disable-next-line:no-console
            console.warn(chalk_1.default.yellow(utils_1.logPrefix(LogLevel.WARN)), ...args);
        }
    }
    info(...args) {
        if (this.logLevel > LogLevel.INFO) {
            // tslint:disable-next-line:no-console
            console.info(chalk_1.default.green(utils_1.logPrefix(LogLevel.INFO)), ...args);
        }
    }
    debug(...args) {
        if (this.logLevel > LogLevel.DEBUG) {
            // tslint:disable-next-line:no-console
            console.debug(chalk_1.default.blue(utils_1.logPrefix(LogLevel.DEBUG)), ...args);
        }
    }
    trace(...args) {
        if (this.logLevel > LogLevel.TRACE) {
            // tslint:disable-next-line:no-console
            console.log(chalk_1.default.grey(utils_1.logPrefix(LogLevel.TRACE), ...args));
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUEwQjtBQUMxQixtQ0FBb0M7QUFFcEMsSUFBWSxRQVNYO0FBVEQsV0FBWSxRQUFRO0lBQ2xCLHFDQUFPLENBQUE7SUFDUCx5Q0FBUyxDQUFBO0lBQ1QseUNBQVMsQ0FBQTtJQUNULHVDQUFRLENBQUE7SUFDUix1Q0FBUSxDQUFBO0lBQ1IseUNBQVMsQ0FBQTtJQUNULHlDQUFTLENBQUE7SUFDVCxxQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQVRXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBU25CO0FBRUQ7SUFHRSxZQUFZLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFTSxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFFTSxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbkMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDLElBQUksQ0FBQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNILENBQUM7Q0FDRjtBQWhERCx3QkFnREMifQ==