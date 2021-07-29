import dotenv from 'dotenv';
import Hapi from '@hapi/hapi';
import api from './routes/api/api.js';
import Database from './config/database.js';

dotenv.config();

const init = async () => {
    const APP_HOST = process.env.APP_HOST || 'http://localhost';
    const APP_PORT = process.env.APP_PORT || 3000;

    const HOST = APP_HOST.split('://')[1];
    const PORT = APP_PORT;

    const server = Hapi.server({
        host: HOST,
        port: PORT
    });

    try {
        await Database.connect();
    } catch (error) {
        console.log(error);
    }

    server.route(api);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
