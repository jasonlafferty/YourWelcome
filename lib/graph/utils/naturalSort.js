import { sortBy } from 'lodash';

export const regexFloat = string => parseFloat(string.match(/(\.|\d)+(\.\d+)?/)[0], 10);

export const naturalSort = ({ properties, sortKey = 'address', sortOrder = 'asc' }) => {
  const sortProperties = sortBy(properties, p => regexFloat(p[sortKey]));
  return sortOrder === 'asc' ? sortProperties : sortProperties.reverse();
};
