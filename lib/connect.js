const { Pool } = require('pg');
const config = require('./config');

config();

const pg = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

pg.on('error', (err) => {
    console.log('ERROR ENCOUNTERED!');
    process.exit(0);
});

pg.on('remove', () => {
    process.exit(0);
});

module.exports = {
    close: () => pg.end(),
    select: (query) => pg.query(query)
};
