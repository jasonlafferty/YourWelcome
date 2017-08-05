import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Property',
  description: 'A property',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'the id of the property',
      resolve: property => property.id,
    },
    address: {
      type: GraphQLString,
      description: 'the address of the property',
      resolve: property => property.address,
    },
  }),
});
