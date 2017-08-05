import React from 'react';
import Relay from 'react-relay';
import { makeRouteConfig, Route } from 'found/lib';
import IndexPage from './pages';
import NotFoundPage from './pages/notFound';

const viewer = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default makeRouteConfig(
  <Route path="/">
    <Route
      Component={IndexPage}
      queries={viewer}
    />
    <Route
      path="*"
      Component={NotFoundPage}
    />
  </Route>,
);
