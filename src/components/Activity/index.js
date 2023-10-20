import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Activity = ({book}) => {
  const navigation = useNavigation();
  const onContinue = () => {
    navigation.navigate('BookDetailsScreen', {book: book});
  };

  return (
    <View style={styles.bookItem}>
      <Image source={book.coverPage} style={styles.bookImage} />
      <View style={styles.bookCard}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.bookCategory}>Category: {book.category}</Text>
        <Text style={styles.bookAuthor}>Author: {book.author}</Text>
        <Text style={styles.bookLanguage}>Language: {book.language}</Text>

        {/* "Continue Your Journey" button */}
        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueButtonText}>Continue Where You Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#9993',
    borderRadius: 20,
    padding: 10,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  bookCard: {
    marginLeft: 16,
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookCategory: {
    fontSize: 16,
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookLanguage: {
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#0A84FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Activity;