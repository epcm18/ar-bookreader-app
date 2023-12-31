import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BookDetailsScreen from '../../Screens/BookDetailsScreen/BookDetailsScreen';
import BooksHorizontal from '../BooksHorizontal';
import { useFetchBooks } from '../../hooks/useFetchBooks';
import { addBookstobookItems, bookItems } from '../BookData';

const windowWidth = Dimensions.get('window').width;

export default function Books() {
  const navigation = useNavigation();
  const { loading, error, books } = useFetchBooks(); // Fetch books using the custom hook

  // State to store the fetched books

  const [fetchedBooks, setFetchedBooks] = useState([]);

  // Debugging: Log the books array
  console.log('Books:', books);

  useEffect(() => {
    if (loading) {
      // Loading state: You can show a loading indicator or a message
      console.log('Loading books...'); // Debugging: Log loading state
      return;
    }

    if (error) {
      // Error state: You can show an error message
      console.error('Error loading books:', error); // Log the error for debugging
      console.log('Failed to load books. Please try again later.'); // Display a user-friendly message
      return;
    }

    if (books.length === 0) {
      // No books found: You can show a message or handle this case
      console.log('No books found.'); // Debugging: Log no books found
      return;
    }

    // Books loaded successfully
    setFetchedBooks(books);
    // console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded successfully:', books.length, 'books');
    addBookstobookItems(books);
  }, [loading, error, books]);


  const renderBookItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPressIn={() => {
          if (item.ARcontent === 'Yes') {
            console.log('ARcontent:', item.title);
            // Navigate to a different URL when ARcomtent is 'Yes'
            // Replace 'YOUR_AR_URL' with the actual URL you want to navigate to
            Linking.openURL("unitydl://mylink").catch((err) => {
              console.error('Failed to open URL:', err);
            });
          } else {
            console.log('NoARcontent:');
            // Navigate to the 'BookDetailsScreen' when ARcomtent is not 'Yes'
            navigation.navigate('BookDetailsScreen', { book: item });
          }
        }}
      >
        <View style={styles.bookImageContainer}>
          {loading ? ( // Display loading indicator if data is still loading
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <Image
              source={{ uri: item.image }}
              style={styles.bookImage}
              resizeMode="cover"
            />
          )}
        </View>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </TouchableOpacity>
    );

  };

  return (
    <View style={styles.container}>
      {books.length > 0 ? (
        <View style={styles.safeAreaContainer}>
          <Text style={styles.title}>All Books</Text>
          <FlatList
            data={bookItems} // Use the fetched books here
            keyExtractor={bookItems.id}
            renderItem={renderBookItem}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      ) : (
        <Text>No books found</Text>)}
    </View>
  );
}

export const BooksRecent = () => {

  const { loading, error, books } = useFetchBooks();
  const [fetchedBooks, setFetchedBooks] = useState([]);
  useEffect(() => {
    if (loading) {
      // Loading state: You can show a loading indicator or a message
      console.log('Loading books...'); // Debugging: Log loading state
      return;
    }

    if (error) {
      // Error state: You can show an error message
      console.error('Error loading books:', error); // Log the error for debugging
      console.log('Failed to load books. Please try again later.'); // Display a user-friendly message
      return;
    }

    if (books.length === 0) {
      // No books found: You can show a message or handle this case
      console.log('No books found.'); // Debugging: Log no books found
      return;
    }

    // Books loaded successfully
    setFetchedBooks(books);
    // console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded successfully:', books.length, 'books');
    addBookstobookItems(books);
  }, [loading, error, books]);
  const recentBooks = bookItems.slice(-4);
  if (recentBooks[0]) {
    console.log('Recent books:', recentBooks);
    return <BooksHorizontal title="Recent" data={recentBooks} />;
  }
  else {
    return <Text>Loading...</Text>
  }
};
//

// export const BooksRecent = () => {
//   const recentBooks = bookItems.slice(-4);
//   if (recentBooks.length > 0) {
//     console.log('Recent books:', recentBooks);
//     return recentBooks;
//   } else {
//     return <Text>Loading...</Text>;
//   }
// };


export const BooksReccomended = () => {

  const { loading, error, books } = useFetchBooks();
  const [fetchedBooks, setFetchedBooks] = useState([]);
  useEffect(() => {
    if (loading) {
      // Loading state: You can show a loading indicator or a message
      console.log('Loading books...'); // Debugging: Log loading state
      return;
    }

    if (error) {
      // Error state: You can show an error message
      console.error('Error loading books:', error); // Log the error for debugging
      console.log('Failed to load books. Please try again later.'); // Display a user-friendly message
      return;
    }

    if (books.length === 0) {
      // No books found: You can show a message or handle this case
      console.log('No books found.'); // Debugging: Log no books found
      return;
    }

    // Books loaded successfully
    setFetchedBooks(books);
    // console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded successfully:', books.length, 'books');
    addBookstobookItems(books);
  }, [loading, error, books]);
  // Get 4 random books from bookItems
  const recommendedBooks = bookItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  if (recommendedBooks.length > 0) {
    return <BooksHorizontal title="Recommended" data={recommendedBooks} />;
  } else {
    return <Text>Loading...</Text>
  }
};

export const BooksPopular = () => {

  const { loading, error, books } = useFetchBooks();
  const [fetchedBooks, setFetchedBooks] = useState([]);
  useEffect(() => {
    if (loading) {
      // Loading state: You can show a loading indicator or a message
      console.log('Loading books...'); // Debugging: Log loading state
      return;
    }

    if (error) {
      // Error state: You can show an error message
      console.error('Error loading books:', error); // Log the error for debugging
      console.log('Failed to load books. Please try again later.'); // Display a user-friendly message
      return;
    }

    if (books.length === 0) {
      // No books found: You can show a message or handle this case
      console.log('No books found.'); // Debugging: Log no books found
      return;
    }

    // Books loaded successfully
    setFetchedBooks(books);
    // console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded successfully:', books.length, 'books');
    addBookstobookItems(books);
  }, [loading, error, books]);
  // Sort the books by ratings in descending order (highest ratings first)
  const sortedBooks = bookItems.sort((a, b) => b.ratings - a.ratings);

  // Get the top 4 books with the highest ratings
  const popularBooks = sortedBooks.slice(0, 4);

  if (popularBooks.length > 0) {
    return <BooksHorizontal title="Most Popular" data={popularBooks} />;
  } else {
    return <Text>Loading...</Text>;
  }
};


export const BooksAR = () => {
  const { loading, error, books } = useFetchBooks();
  const [fetchedBooks, setFetchedBooks] = useState([]);
  useEffect(() => {
    if (loading) {
      // Loading state: You can show a loading indicator or a message
      console.log('Loading books...'); // Debugging: Log loading state
      return;
    }

    if (error) {
      // Error state: You can show an error message
      console.error('Error loading books:', error); // Log the error for debugging
      console.log('Failed to load books. Please try again later.'); // Display a user-friendly message
      return;
    }

    if (books.length === 0) {
      // No books found: You can show a message or handle this case
      console.log('No books found.'); // Debugging: Log no books found
      return;
    }

    // Books loaded successfully
    setFetchedBooks(books);
    // console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded successfully:', books.length, 'books');
    addBookstobookItems(books);
  }, [loading, error, books]);
  // Filter books with ARcontent = 'yes' from bookItems
  const arBooks = bookItems.filter((book) => book.ARcontent === 'Yes');
  return <BooksHorizontal title="AR" data={arBooks} />;
};

export const BookSearch = (title) => {
  // filter books by the name
  const searchBooks = bookItems.filter((book) => book.title === title);
  return <BooksHorizontal title="Search Result" data={searchBooks} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeAreaContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  bookItem: {
    flex: 0.5, // Two items per row, so each item should take half the space
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  bookImageContainer: {
    alignItems: 'center',
    padding: 8,
  },
  bookImage: {
    width: windowWidth * 0.4, // Adjust the width as needed
    height: 250,
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  bottomText: {
    fontWeight: 'bold',
  },
});