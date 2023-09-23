import { config } from 'dotenv';

config();

const { PORT, LOG_LEVEL, MONGO_URL } = process.env;

export const Config = {
    PORT,
    LOG_LEVEL,
    MONGO_URL,
};
