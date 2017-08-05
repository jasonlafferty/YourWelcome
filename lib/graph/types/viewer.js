import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import properties from '../utils/properties';
import { naturalSort } from '../utils/naturalSort';
import { propertyType } from './';

export default new GraphQLObjectType({
  name: 'Viewer',
  description: 'A person who uses our app',
  fields: () => ({
    properties: {
      type: new GraphQLList(propertyType),
      description: 'a list of properties',
      args: {
        sortKey: {
          type: GraphQLString,
          description: 'the key to sort the property by, id or address',
        },
        sortOrder: {
          type: GraphQLString,
          description: 'which way to sort, ascending, or descending',
        },
      },
      resolve: (_, { sortKey, sortOrder }) => naturalSort({ properties, sortKey, sortOrder }),
    },
  }),
});
