import { naturalSort, regexFloat } from '../utils/naturalSort';
import properties from '../utils/properties';

test('regexFloat to return correct number from a string', () => {
  expect(regexFloat('.1 address')).toEqual(0.1);
  expect(regexFloat('2 address')).toEqual(2);
  expect(regexFloat('12 address')).toEqual(12);
});

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

  const sorted = naturalSort({ properties, sortKey: 'id' });
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

  const sorted = naturalSort({ properties, sortKey: 'address' });
  expect(sorted).toEqual(sortedArray);
});

test('sorts properties in correct order, by sortKey address and sortOrder desc', () => {
  const sortedArray = [
    {
      address: '21 address',
      id: '7',
    }, {
      address: '12 address',
      id: '5',
    }, {
      address: '11 address',
      id: '6',
    }, {
      address: '10 address',
      id: '3',
    }, {
      address: '2 address',
      id: '2',
    }, {
      address: '1 address',
      id: '4',
    },
    {
      address: '.1 address',
      id: '1',
    },
  ];

  const sorted = naturalSort({ properties, sortKey: 'address', sortOrder: 'desc' });
  expect(sorted).toEqual(sortedArray);
});
