import { sortBy } from 'lodash';

const simpleSort = ({ properties, sortKey = 'address', sortOrder = 'asc' }) => {
  return sortBy(properties, p => p[sortKey]);
};

export default simpleSort;
