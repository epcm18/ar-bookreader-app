import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOption, setSortOption] = useState("");

  // Handle search text input
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // You can implement search logic here
  };

  // Handle filter selection
  const handleFilterSelection = (option) => {
    // Toggle the selected filter
    if (selectedFilters.includes(option)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== option));
    } else {
      setSelectedFilters([...selectedFilters, option]);
    }
  };

  // Handle sort option selection
  const handleSortOptionChange = (option) => {
    setSortOption(option);
    // You can implement sorting logic here
  };

  // Handle the search button press
  const handleSearch = () => {
    // Implement your search functionality here using searchText, selectedFilters, and sortOption
    // Update your UI or navigate to the search results screen
  };

  // Handle the cancel button press to clear the search text
  const handleCancel = () => {
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearchTextChange}
          value={searchText}
        />
        {searchText.length > 0 && (
          <Button title="Cancel" onPress={handleCancel} />
        )}
      </View>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <Text style={styles.filterLabel}>Filters:</Text>
        {filterOptions.map((option) => (
          <Button
            key={option}
            title={option}
            onPress={() => handleFilterSelection(option)}
            color={selectedFilters.includes(option) ? "#0A96E6" : "gray"}
          />
        ))}
      </View>

      {/* Sort Section */}
      <View style={styles.sortSection}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        <Button
          title="Recent"
          onPress={() => handleSortOptionChange("Recent")}
          color={sortOption === "Recent" ? "#0A96E6" : "gray"}
        />
        <Button
          title="Most Viewed"
          onPress={() => handleSortOptionChange("Most Viewed")}
          color={sortOption === "Most Viewed" ? "#0A96E6" : "gray"}
        />
      </View>

      {/* Search Button */}
      <Button title="Search" onPress={handleSearch} />

      {/* Display Search Results Here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  filterSection: {
    marginBottom: 12,
  },
  filterLabel: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  sortSection: {
    marginBottom: 12,
  },
  sortLabel: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default SearchScreen;
