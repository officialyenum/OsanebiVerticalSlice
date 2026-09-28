import pino from 'pino';

export default class Logger {
    private context: Record<string, any>;
    private logger: pino.Logger;

    constructor(context: Record<string, any> = {}) {
        this.context = context;
        this.logger = pino({
            level: 'info',
            formatters: {
                log: (logObject) => {
                    return { ...logObject, ...this.context };
                }
            }
        });
    }

    log(message: string, additionalContext: Record<string, any> = {}) {
        this.logger.info({ message, ...additionalContext });
    }

    error(message: string, additionalContext: Record<string, any> = {}) {
        this.logger.error({ message, ...additionalContext });
    }

    withContext(newContext: Record<string, any>): Logger {
        return new Logger({ ...this.context, ...newContext });
    }

}