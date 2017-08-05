# YourWelcome Code Test

## Getting started

Prerequesits
You'll need node installed

First, install the required packages:
```npm install```

Next, launch the application:
```npm run update-schema && npm run start```

You should now be able to access the site at http://localhost:3013 and the Relay Graph at http://localhost:3013/graphql

Here is a basic graph query to input into the GraphQL
```
{
  viewer {
    properties(sortKey: "address", sortOrder: "asc") {
      address
    }
  }
}
```

## The tasks

We have a problem! We are trying to sort our properties by address, but they're not sorted correctly! Our sort function uses lodash `sortBy` (https://lodash.com/docs/4.17.4#sortBy), but it's just not working the way we'd like. We want our addresses sorted using a natural sort order (https://en.wikipedia.org/wiki/Natural_sort_order).

First things first, have a look at the test in `/lib/graph/__tests__/sort.js` and run it by running `npm run test`. You'll see it works for one test, but fails for another.

The first task is to modify the sorting function (`/lib/graph/utils/simpleSort.js`) to perform a natural sort and get the tests to pass - add some new tests if you want to be sure it does what you think it should.

Secondly, we want to be able to change the order on the sort function, either ascending by passing a value of `asc` for `sortOrder`, or descending by passing a value of `desc` for `sortOrder`. This should also be tested in the `/lib/graph/__tests__/sort.js` file.

Now that the sorting is working correctly, we'd like to see the ID of each property in the browser. In `/lib/app/components/property.js`, we should be able to add `id` into the Relay query, and render it in the `propertyComponent`, but it hasnt been exposed yet on the graph. First, expose it on the graph (you'll need to rebuild it by running the `update-schema` command above after making your changes), and get the ID to show alongside the address (see: `/lib/graph/types/property.js`).

Finally, we'd like to extend the list of properties to allow the user to change the sorting in the browser. Currently it's sorted by `address, asc` and we need to allow it to be sorted by address or ID, ascending or descending. There are functions being passed in already (`updateSortKey` and `updateSortOrder`) which will update the sort key / order and refresh the view, so they just need using. Your job is to build two simple elements that when changed (could be a drop down, or a radio button, or anything) will change the sort key from `address` to `id` or vice versa, and the sortOrder, from `asc` to `desc` or vice versa.
