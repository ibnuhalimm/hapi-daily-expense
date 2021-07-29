import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

class Database {
    static connect() {
        const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

        const mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        if (DB_USERNAME && DB_PASSWORD) {
            return mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, mongoOptions);
        }

        return mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, mongoOptions);
    }
};

export default Database;
