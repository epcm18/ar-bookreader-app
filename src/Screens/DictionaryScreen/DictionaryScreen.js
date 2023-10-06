import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import useDictionary from '../../hooks/useDictionary'; // Import the custom hook

const DictionaryScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {definitions, loading, error, searchWord} = useDictionary(); // Use the custom hook

  const handleSearch = () => {
    searchWord(searchTerm); // Call the searchWord function to fetch definitions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dictionary</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : error ? (
        <Text style={styles.error}>No word entered</Text>
      ) : definitions && definitions.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.definitionContainer}>
            <Text style={styles.definitionTitle}>Definition:</Text>
            <Text style={styles.definitionText}>
              {definitions[0]?.meanings[0]?.definitions[0]?.definition ||
                'No definition found.'}
            </Text>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  loading: {
    fontSize: 16,
    marginTop: 16,
  },
  error: {
    fontSize: 16,
    marginTop: 16,
    color: 'red',
  },
  scrollView: {
    marginTop: 16,
  },
  definitionContainer: {
    marginBottom: 16,
  },
  definitionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#0A96E6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  definitionText: {
    fontSize: 16,
  },
});

export default DictionaryScreen;
