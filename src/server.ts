import Config from './config/index';
import app from './app';

const startServer = () => {
    try {
        const port = Config.PORT || 5678;
        app.listen(port, () => {
            // console.log(`server is started at http://localhost:${port}`);
        });
    } catch (err) {
        // console.log(err);
    }
};

startServer();
