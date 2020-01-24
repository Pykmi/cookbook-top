import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//import secure from './auth/middleware';
import cors from './cors';
//import db from "../server/connect";
//import router from './routers';

// create server
const app = express();

// middleware
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// database connection
// connect();

// routers
app.use('/api/cookbook', (req, res) => res.send('Welcome to cookbook.'));
//app.use('/api/cookbook', router.blog);
//app.use('/api/cookbook/admin', secure, router.admin);

export default app;
