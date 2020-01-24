import { Client } from 'pg';
import config from '../lib/config'

config();

const pg = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

pg.connect();

export default {
    close: () => pg.end(),
    select: (query, callback) => pg.query(query, callback)
};
