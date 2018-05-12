import { Logger, LogLevel } from './Logger';

describe('Logger', () => {
  it('logs without crashing', () => {
    const logger = new Logger(LogLevel.ALL);
    logger.fatal('fatal', ['array']);
    logger.error('error', { key: 'value' });
    logger.warn('warn', 1);
    logger.info('info');
    logger.debug('debug', 'string');
    logger.trace('trace', false);
  });
});
