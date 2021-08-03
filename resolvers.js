const { books, persons, feeds } = require('./dummyData');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
module.exports = {
  Query: {
    books: () => books,
    feedAvailability: () => feeds,
  },
};
