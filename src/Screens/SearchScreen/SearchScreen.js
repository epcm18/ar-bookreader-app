import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import Material Community Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import profilePic from "../../../assets/profile.jpeg";
import Books from "../../components/Books/Books";
import { SafeAreaView } from "react-native-safe-area-context";

import BookDetailsScreen from "../BookDetailsScreen/BookDetailsScreen";
import { useNavigation } from "@react-navigation/native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { bookItems } from "../../components/BookData";


const SearchScreen = () => {
  const navigation = useNavigation(); // Initialize navigation
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(""); // Add state to keep track of the selected filter

  // Handle search text input
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // You can implement search logic here
  };

  // Handle the search button press or Enter key press
  const handleSearch = () => {
    // Implement your search functionality here using searchText
    // Update your UI or navigate to the search results screen
    // Create a new array to store filtered books
    const filteredBooks = bookItems.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Search Text:", searchText);
    console.log("Filtered Books:", filteredBooks);

    setSearchText("");
  };

  // Handle the cancel button press to clear the search text
  const handleCancel = () => {
    setSearchText("");
  };

  // Handle filter option press
  const handleFilterOptionPress = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        {/* Header */}
        <View style={styles.header}>
          {/* Left side */}
          <TouchableOpacity onPress={() => navigation.navigate("UserProfileScreen")}>
            <View style={styles.profileContainer}>
              <Image source={profilePic} style={styles.profilePic} />
              <Text style={styles.profileText}>Hi, Welcome Back!</Text>
            </View>
          </TouchableOpacity>

          {/* Right side */}
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => navigation.navigate("NotificationsScreen")}>
              <FontAwesomeIcon
                icon={faBell}
                size={24}
                color="white" // Customize the icon color
              />
            </TouchableOpacity>
            <View style={{ marginRight: 20 }} />
            <TouchableOpacity onPress={() => navigation.navigate("FavouritesScreen")}>
              <FontAwesomeIcon
                icon={faHeart}
                size={24}
                color="white" // Customize the icon color
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Input */}
        <View style={styles.searchInputContainer}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={15}
            color="black" // Customize the icon color
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="black" // Customize the text input color
            onChangeText={handleSearchTextChange}
            value={searchText}
            onSubmitEditing={handleSearch}
          />
          {searchText.length > 0 && (
            <FontAwesomeIcon
              icon={faClose}
              size={15}
              color="black" // Customize the icon color
              onPress={handleCancel}
            />
          )}
        </View>
      </View>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}></Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Recent" && { backgroundColor: "#0A96E6" }, // Change background color based on the selected filter
            ]}
            onPress={() => handleFilterOptionPress("Recent")}
          >
            <Text style={styles.filterOptionText}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Popular" && { backgroundColor: "#0A96E6" },
            ]}
            onPress={() => handleFilterOptionPress("Popular")}
          >
            <Text style={styles.filterOptionText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Adventure" && { backgroundColor: "#0A96E6" },
            ]}
            onPress={() => handleFilterOptionPress("Adventure")}
          >
            <Text style={styles.filterOptionText}>Adventure</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "AR" && { backgroundColor: "#0A96E6" },
            ]}
            onPress={() => handleFilterOptionPress("AR")}
          >
            <Text style={styles.filterOptionText}>AR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Sci-fic" && { backgroundColor: "#0A96E6" },
            ]}
            onPress={() => handleFilterOptionPress("Sci-fic")}
          >
            <Text style={styles.filterOptionText}>Sci-fic</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Books />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchcontainer: {
    backgroundColor: "#0A96E6",
    padding: 16,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 26,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20, // Make it round
  },
  profileText: {
    marginLeft: 8,
    color: "white", // Customize the text color
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20, // Add space between bell and book icons
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "white", // Customize the background color
    borderRadius: 8, // Add some border radius
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "black", // Customize the text color
  },
  filterSection: {
    marginBottom: 12,
    paddingHorizontal: 25,
  },
  filterLabel: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "white", // Customize the text color
  },
  filterOptions: {
    flexDirection: "row",
  },
  filterOption: {
    backgroundColor: "gray", // Default background color for options
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  filterOptionText: {
    color: "white", // Customize the option text color
  },
});

export default SearchScreen;
