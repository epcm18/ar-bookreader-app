import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);

  // Function to fetch books from the server
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.144:4000/api/book/getBooks"
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Fetch books when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to navigate to the PDF screen with a specific PDF URL
  const openPdf = (pdfUrl) => {
    navigation.navigate("PDF", { pdfUrl });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {books.map((book) => (
          <TouchableOpacity
            key={book._id} // Use a unique key for each book
            style={styles.button}
            onPress={() => openPdf(book.Link)} // Assuming your book object has a "pdfUrl" property
          >
            <Text style={styles.buttonText}>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align buttons to the left of the screen
    marginTop: 20,
  },
  button: {
    width: 80, // Adjust the width to make it square
    height: 80, // Adjust the height to make it square
    backgroundColor: "white", // Set the background color to white
    borderRadius: 10, // Adjust the border radius for rounded corners
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF", // Change the text color to blue
  },
});

export default HomeScreen;
