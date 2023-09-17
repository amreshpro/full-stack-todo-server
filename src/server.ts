import { Config } from './config/index';
import app from './app';
import logger from './config/logger';

const startServer = () => {
    const port = Config.PORT || 5678;
    try {
        // throw new Error('Something went wrong bro');
        app.listen(port, () => {
            logger.debug(`server is started at http://localhost:${port}`);
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err);
            setTimeout(() => {
                process.exit();
            }, 1000);
        }
    }
};

startServer();
