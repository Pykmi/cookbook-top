import app from './server';
import config from '../lib/config';

config();

// acquire or set default web server port
const port = process.env.PORT;

// start express server
app.listen(port, () => {
    console.log(`Running on PORT: ${port}`);
});

// export app for testing purpose
export default app;
