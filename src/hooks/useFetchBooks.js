import {useState, useEffect} from 'react';

export function useFetchBooks() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'http://192.168.8.181:4000/api/book/getBooks',
      );
      const data = await response.json();
      console.log("Fetching...: ", data);
      console.log(data.data.books[0].title);
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return {loading, error, books};
}