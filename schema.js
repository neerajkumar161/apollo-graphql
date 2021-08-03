const { gql } = require('apollo-server');

module.exports = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }
  type Person {
    title: String
    author: String
  }

  type feeds {
    todays_featured_article: [String]
    most_read: [String]
    picture_of_the_day: [String]
    in_the_news: [String]
    on_this_day: [String]
  }
  type Query {
    books: [Book]
    feedAvailability: feeds
  }
  type Query {
    persons: [Person]
  }
`;
