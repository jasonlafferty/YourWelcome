import express from 'express';
import path from 'path';
import requestMiddleWare from './graph/middleware/request';
import webpackDevApp from './webpack';

const APP_PORT = 3013;
const GRAPHQL_PORT = 8088;

const app = express();
app.use('/', requestMiddleWare);
app.listen(GRAPHQL_PORT);

webpackDevApp.listen(APP_PORT, () =>
  console.log(`Dev (Webpack) app is now running on http://localhost:${APP_PORT}`), // eslint-disable-line
);

webpackDevApp.use('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
