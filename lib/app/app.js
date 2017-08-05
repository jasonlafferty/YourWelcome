import 'babel-polyfill';
import { BrowserProtocol } from 'farce/lib';
import { createRender, createFarceRouter } from 'found/lib';
import { Resolver } from 'found-relay';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import routes from './routes';

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  render: createRender({ }),
  routeConfig: routes,
});

ReactDOM.render(
  <Router resolver={new Resolver(Relay.Store)} />,
  document.getElementById('root'),
);
