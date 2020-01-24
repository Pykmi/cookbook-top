const dotenv = require('dotenv');

const STAGE = process.env.NODE_ENV || 'development';
module.exports = () => (dotenv.config({ path: `./.env.${STAGE}` }));
