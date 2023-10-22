export const categoryData = [
  {
    id: 1,
    title: 'Category 1',
  },
  {
    id: 2,
    title: 'Category 2',
  },
  {
    id: 3,
    title: 'Category 3',
  },
  {
    id: 4,
    title: 'Category 4',
  },
  {
    id: 5,
    title: 'Category 5',
  },
];

export const bookItems = [];

export function addBookstobookItems(books) {
  // Ensure that books is an array
  console.log('Adding books to bookItems:', books);
  if (books && books.data && Array.isArray(books.data.books)) {
    console.log("here");
    books.data.books.forEach((book) => {
      // You may need to adjust the properties here according to your data structure
      const bookItem = {
        id: book._id,
        title: book.title,
        author: book.author,
        language: book.language,
        genre: book.genre,
        ARcontent: book.ARcontent,
        description: book.description,
        image: book.image,
        rating: book.ratings,
      };
      bookItems.push(bookItem);
      console.log('Book added to bookItems:', bookItem);
    });
  }
}
