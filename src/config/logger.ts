import winston from 'winston';
import { Config } from './index';

const logLevel = Config.LOG_LEVEL;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
    ),
    defaultMeta: { service: 'todo-backend' },
    transports: [
        new winston.transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: logLevel,
            silent: false,
        }),
        new winston.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error',
            silent: false,
        }),

        new winston.transports.Console({
            level: logLevel,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            ),
        }),
    ],
});

export default logger;
