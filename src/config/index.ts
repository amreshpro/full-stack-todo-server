import { config } from 'dotenv';

config();

const { PORT, LOG_LEVEL } = process.env;

export const Config = {
    PORT,
    LOG_LEVEL,
};
