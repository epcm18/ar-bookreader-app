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
  if (books && books.data && Array.isArray(books.data.books)) {
    books.data.books.forEach((book) => {
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
        link: book.Link,
      };

      // Check if a book with the same ID already exists in bookItems
      const existingBook = bookItems.find((item) => item.id === book._id);

      if (!existingBook) {
        bookItems.push(bookItem);
        console.log('Book added to bookItems:', bookItem);
      } else {
        // Handle the case when a book with the same ID already exists
        // You can update the existing item or handle it as needed.
        console.log('Book with the same ID already exists:', book._id);
      }
    });
  }
}

export const personalBookItems = [];

export function addBooksToPersonalbookItems(books, personalLibrary) {

  console.log('here2');
  if (books && books.data && Array.isArray(books.data.books) && personalLibrary) {
    console.log('here3');
    books.data.books.forEach((book) => {
      const bookID = book._id;
      console.log('here4', bookID);

      // Check if the book ID is present in the personalLibrary
      const isBookInPersonalLibrary = personalLibrary.some(item => item === bookID);

      if (isBookInPersonalLibrary) {
        console.log('Book already in personal library:', bookID);
        const bookItem = {
          id: bookID,
          title: book.title,
          author: book.author,
          language: book.language,
          genre: book.genre,
          ARcontent: book.ARcontent,
          description: book.description,
          image: book.image,
          rating: book.ratings,
          link: book.Link,
        };

        // Check if a book with the same ID already exists in bookItems
        const existingBook = personalBookItems.find((item) => item.id === book._id);

        if (!existingBook) {
          personalBookItems.push(bookItem);
          console.log('Book added to personalbookItems:', bookItem);
        } else {
          // Handle the case when a book with the same ID already exists
          // You can update the existing item or handle it as needed.
          console.log('Book with the same ID already exists:', book._id);
        }
      }
      });
  }


}
