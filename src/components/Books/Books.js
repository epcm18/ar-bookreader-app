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
import {ActivityIndicator} from 'react-native-paper';
import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import BookDetailsScreen from '../../Screens/BookDetailsScreen/BookDetailsScreen';
import BooksHorizontal from '../BooksHorizontal';
import {categoryData, bookItems} from '../../components/BookData/index'; // Import dummy data
import {useFetchBooks} from '../../hooks/useFetchBooks';

const windowWidth = Dimensions.get('window').width;

export default function Books() {
  const navigation = useNavigation();
  const {loading, error, books} = useFetchBooks(); // Fetch books using the custom hook

  // State to store the fetched books
  const [fetchedBooks, setFetchedBooks] = useState([]);

  useEffect(() => {
    if (!loading && !error && books.length > 0) {
      setFetchedBooks(books);
    }
  }, [loading, error, books]);

  const renderBookItem = ({item}) => {
    const encodedURI = encodeURI(item.image);
    return (
      <TouchableOpacity
        style={styles.bookItem}
        onPress={() => navigation.navigate('BookDetailsScreen', {book: item})}>
        <View style={styles.bookImageContainer}>
          {loading ? ( // Display loading indicator if data is still loading
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <Image
              src={item.image}
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
      <View style={styles.safeAreaContainer}>
        <Text style={styles.title}>All Books</Text>
        <FlatList
          data={fetchedBooks} // Use the fetched books here
          keyExtractor={item => item._id}
          renderItem={renderBookItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
}

export const BooksRecent = () => {
  return <BooksHorizontal title="Recent" data={bookItems} />;
};

export const BooksReccomended = () => {
  return <BooksHorizontal title="Reccomended" data={bookItems} />;
};

export const BooksFavourites = () => {
  return <BooksHorizontal title="Favourites" data={bookItems} />;
};

export const BooksAR = () => {
  return <BooksHorizontal title="AR" data={bookItems} />;
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
    shadowOffset: {width: 0, height: 2},
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
