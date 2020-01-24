#!/usr/bin/env node

const App = require('./app');
const { start } = require('./controllers');

const app = new App();

app.use('start', start);
app.run();
