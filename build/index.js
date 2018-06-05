"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
let LOG_LEVEL = Logger_1.LogLevel.ALL;
if (process) {
    if (process.env.LOG_LEVEL) {
        const LOG_LEVEL_INPUT = process.env.LOG_LEVEL.toUpperCase().trim();
        if (Logger_1.LogLevel[LOG_LEVEL_INPUT]) {
            LOG_LEVEL = Logger_1.LogLevel[LOG_LEVEL_INPUT];
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn(`LOG_LEVEL=${process.env.LOG_LEVEL} is not a valid log level.` +
                'Must be one of [OFF, FATAL, ERROR, INFO, WARN, DEBUG, TRACE, ALL]');
        }
    }
}
const logger = new Logger_1.Logger(LOG_LEVEL);
exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBNEM7QUFFNUMsSUFBSSxTQUFTLEdBQWEsaUJBQVEsQ0FBQyxHQUFHLENBQUM7QUFFdkMsSUFBSSxPQUFPLEVBQUU7SUFDWCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1FBQ3pCLE1BQU0sZUFBZSxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVFLElBQUssaUJBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDdEMsU0FBUyxHQUFJLGlCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyw0QkFBNEI7Z0JBQzVELG1FQUFtRSxDQUN0RSxDQUFDO1NBQ0g7S0FDRjtDQUNGO0FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFckMsa0JBQWUsTUFBTSxDQUFDIn0=