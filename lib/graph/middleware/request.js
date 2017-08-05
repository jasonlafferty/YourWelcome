import graphQLHTTP from 'express-graphql';
import { Schema } from '../schema';

const requestMiddleware =
  graphQLHTTP(request => ({
    graphiql: true,
    pretty: true,
    rootValue: { request },
    schema: Schema,
  }));

export default requestMiddleware;
