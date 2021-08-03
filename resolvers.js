const { books, persons } = require('./dummyData');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
module.exports = {
  Query: {
    books: () => books,
    feedAvailability: () => feeds,
  },
};

const feeds = {
  todays_featured_article: [
    'bg.wikipedia.org',
    'bn.wikipedia.org',
    'bs.wikipedia.org',
    'cs.wikipedia.org',
    'de.wikipedia.org',
    'el.wikipedia.org',
    'en.wikipedia.org',
    'fa.wikipedia.org',
    'he.wikipedia.org',
    'hu.wikipedia.org',
    'ja.wikipedia.org',
    'la.wikipedia.org',
    'no.wikipedia.org',
    'sco.wikipedia.org',
    'sd.wikipedia.org',
    'sv.wikipedia.org',
    'ur.wikipedia.org',
    'vi.wikipedia.org',
    'zh.wikipedia.org',
  ],
  most_read: ['*.wikipedia.org'],
  picture_of_the_day: ['*.wikipedia.org'],
  in_the_news: [
    'test.wikipedia.org',
    'bs.wikipedia.org',
    'da.wikipedia.org',
    'de.wikipedia.org',
    'el.wikipedia.org',
    'en.wikipedia.org',
    'es.wikipedia.org',
    'fi.wikipedia.org',
    'fr.wikipedia.org',
    'he.wikipedia.org',
    'ko.wikipedia.org',
    'no.wikipedia.org',
    'pl.wikipedia.org',
    'pt.wikipedia.org',
    'ru.wikipedia.org',
    'sco.wikipedia.org',
    'sv.wikipedia.org',
    'vi.wikipedia.org',
  ],
  on_this_day: [
    'en.wikipedia.org',
    'de.wikipedia.org',
    'fr.wikipedia.org',
    'sv.wikipedia.org',
    'pt.wikipedia.org',
    'ru.wikipedia.org',
    'es.wikipedia.org',
    'ar.wikipedia.org',
    'bs.wikipedia.org',
    'uk.wikipedia.org',
  ],
};
