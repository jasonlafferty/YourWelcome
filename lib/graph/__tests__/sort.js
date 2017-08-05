import simpleSort from '../utils/simpleSort';
import properties from '../utils/properties';

test('sorts properties in correct order, by sortKey id', () => {
  const sortedArray = [
    {
      address: '.1 address',
      id: '1',
    }, {
      address: '2 address',
      id: '2',
    }, {
      address: '10 address',
      id: '3',
    }, {
      address: '1 address',
      id: '4',
    }, {
      address: '12 address',
      id: '5',
    }, {
      address: '11 address',
      id: '6',
    }, {
      address: '21 address',
      id: '7',
    },
  ];

  const sorted = simpleSort({ properties, sortKey: 'id' });
  expect(sorted).toEqual(sortedArray);
});

test('sorts properties in correct order, by sortKey address', () => {
  const sortedArray = [
    {
      address: '.1 address',
      id: '1',
    }, {
      address: '1 address',
      id: '4',
    }, {
      address: '2 address',
      id: '2',
    }, {
      address: '10 address',
      id: '3',
    }, {
      address: '11 address',
      id: '6',
    }, {
      address: '12 address',
      id: '5',
    }, {
      address: '21 address',
      id: '7',
    },
  ];

  const sorted = simpleSort({ properties, sortKey: 'address' });
  expect(sorted).toEqual(sortedArray);
});
