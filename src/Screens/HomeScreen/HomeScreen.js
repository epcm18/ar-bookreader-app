import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import heroImage from "../../../assets/MainTopImg.jpeg";
import Books from "../../components/Books/Books";
import { BooksRecent } from "../../components/Books/Books";
import { BooksReccomended } from "../../components/Books/Books";
import { BooksFavourites } from "../../components/Books/Books";
import { BooksAR } from "../../components/Books/Books";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThumbsUp,
  faHeart,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";

const height = Dimensions.get("window").height;

// Define your screen components
const ForYouScreen = () => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <BooksRecent />
      <BooksReccomended />
      <BooksFavourites />
      <BooksAR />
    </View>
  </ScrollView>
);

const ARScreen = () => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <BooksAR />
    </View>
  </ScrollView>
);

const FavoritesScreen = () => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <BooksFavourites />
    </View>
  </ScrollView>
);

const initialLayout = { width: Dimensions.get("window").width };

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

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "forYou", title: "FOR YOU", icon: faThumbsUp },
    { key: "ar", title: "AR", icon: faVrCardboard },
    { key: "favorites", title: "FAVORITES", icon: faHeart },
  ]);

  const renderScene = SceneMap({
    forYou: ForYouScreen,
    ar: ARScreen,
    favorites: FavoritesScreen,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: "#000", margin: 8 }}>{route.title}</Text>
      )}
      renderIcon={({ route, focused, color }) => (
        <FontAwesomeIcon
          icon={route.icon}
          size={20} // Adjust the size as needed
          color={focused ? "#0A96E6" : "#999"} // Customize the color based on focus
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      <Image source={heroImage} style={styles.hero} resizeMode="cover" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        indicatorStyle={{ backgroundColor: "#000" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    width: "100%",
    height: height * 0.25,
  },
  tabBar: {
    backgroundColor: "#fff", // Customize the tab bar background color
  },
});

export default HomeScreen;

// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [books, setBooks] = useState([]);

//   // Function to fetch books from the server
//   const fetchBooks = async () => {
//     try {
//       const response = await fetch(
//         "http://192.168.1.144:4000/api/book/getBooks"
//       );
//       const data = await response.json();
//       setBooks(data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };

//   // Fetch books when the component mounts
//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   // Function to navigate to the PDF screen with a specific PDF URL
//   const openPdf = (pdfUrl) => {
//     navigation.navigate("PDF", { pdfUrl });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.buttonContainer}>
//         {books.map((book) => (
//           <TouchableOpacity
//             key={book._id} // Use a unique key for each book
//             style={styles.button}
//             onPress={() => openPdf(book.Link)}
//           >
//             <Text style={styles.buttonText}>{book.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start", // Align buttons to the left of the screen
//     marginTop: 20,
//   },
//   button: {
//     width: 80,
//     height: 80,
//     backgroundColor: "white",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#007AFF", // Change the text color to blue
//   },
// });

// export default HomeScreen;