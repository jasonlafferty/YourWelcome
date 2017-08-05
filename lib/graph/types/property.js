import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Property',
  description: 'A property',
  fields: () => ({
    address: {
      type: GraphQLString,
      description: 'the address of the property',
      resolve: (property) => property.address,
    },
    // to do: add id
  }),
});
