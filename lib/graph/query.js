import { GraphQLObjectType } from 'graphql';
// import { nodeField } from './interfaces/node';
import { viewerType } from './types';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    // node: nodeField,
    viewer: {
      type: viewerType,
      resolve: () => ({
        viewerID: 1,
      }),
    },
  }),
});
