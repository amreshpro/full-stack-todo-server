import logger from '../config/logger';
import mongoose from 'mongoose';

async function connectDB(url: string, dbName = 'test') {
    try {
        await mongoose.connect(url, { dbName }).then(() => {
            logger.info(`Database Connected Successfully`);
        });
    } catch (error) {
        logger.error('dbError', error);
    }
}

export default connectDB;
