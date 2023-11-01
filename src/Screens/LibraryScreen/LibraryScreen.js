import React from "react";
import { View, Text, Platform, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Button } from "react-native";
import Books from "../../components/Books/Books";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { addBooksToPersonalbookItems, personalBookItems } from "../../components/BookData";
import { useNavigation } from "@react-navigation/native";
import { Linking } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const LibraryScreen = () => {

  const navigation = useNavigation();
  const context = useAuthContext();
  console.log("context", context);

  const [personalLibrary, setPersonalLibrary] = useState(context.user.addToLibrary);

  console.log("personalLibrary", personalLibrary);

  const { loading, error, books } = useFetchBooks(); // Fetch books using the custom hook

  // State to store the fetched books


  const [fetchedBooks, setFetchedBooks] = useState([]);

  // State to force re-render the screen
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshLibrary = () => {
    // Perform the refresh logic here, e.g., fetching new data
    // Update personalLibrary and fetchedBooks accordingly

    // Update the refreshKey to force a re-render
    setRefreshKey(refreshKey + 1);
  };

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
    console.log('fetchedBooks:', fetchedBooks);
    console.log('Books loaded to library screen successfully:', books.length, 'books');
    addBooksToPersonalbookItems(books, personalLibrary);
    console.log("personalbookitems", personalBookItems);
  }, [loading, error, books]);

  useEffect(() => {
    setPersonalLibrary(personalLibrary);
  }, [personalLibrary]);

  // Function to render each book item

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
    <View key={refreshKey} style={styles.container}>
      <View style={styles.refreshButtonContainer}>
        <Button title="Refresh" onPress={refreshLibrary} />
      </View>
      {books.length > 0 ? (
        <View style={styles.safeAreaContainer}>
          <Text style={styles.title}>My Library</Text>
          <FlatList
            data={personalBookItems} // Use the fetched books here
            keyExtractor={personalBookItems.id}
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

export default LibraryScreen;
