import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faBookOpen,
  faBookReader,
  faSpellCheck,
} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {faArrowLeft, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faSquareXmark} from '@fortawesome/free-solid-svg-icons';

const BookDetailsScreen = ({route}) => {
  const {book} = route.params;
  const navigation = useNavigation();
  const [wishlisted, setWishlisted] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const openPdf = pdfUrl => {
    navigation.navigate('PDF', {pdfUrl});
  };

  const handleWishlistToggle = () => {
    setWishlisted(!wishlisted);
  };

  const handleReserveToggle = () => {
    // Check if the book is not already reserved
    setReserved(!reserved);
  };

  const handleCoverImagePress = () => {
    setShowButtons(true);
  };

  const handleModalClose = () => {
    setShowButtons(false);
    navigation.navigate('DictionaryScreen');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.coverImageContainer}
            onPress={handleCoverImagePress}>
            <Image source={{ uri: book.image}} style={styles.bookImage} />
          </TouchableOpacity>

          <Text style={styles.bookTitle}>{book.title}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.wishlistButton}
              onPress={handleWishlistToggle}>
              <View style={styles.iconTextContainer}>
                <FontAwesomeIcon
                  icon={faHeart}
                  size={24}
                  color={wishlisted ? '#FF34DF' : 'gray'}
                />
                <Text style={styles.buttonText}>
                  {wishlisted ? 'Added to favourites' : 'Add to favourites'}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.reserveButton}
              onPress={handleReserveToggle}
              disabled={book.reserved}>
              <View style={styles.iconTextContainer}>
                <FontAwesomeIcon
                  icon={faBookOpen}
                  size={24}
                  color={book.reserved ? '#FF34DF' : 'green'}
                />
                <Text style={styles.buttonText}>
                  {book.reserved ? 'Added' : 'Add to library'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.bookCategory}>Category: {book.genre}</Text>
          <Text style={styles.bookAuthor}>Author: {book.author}</Text>
          <Text style={styles.bookLanguage}>Language: {book.language}</Text>
          <Text style={styles.bookAbstract}>{book.description}</Text>
          <Text style={styles.bookAbstract}>{book.ratings}</Text>

          <Modal
            visible={showButtons}
            transparent={true}
            animationType="slide"
            onRequestClose={handleModalClose}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.modalCloseButton}
                onPress={handleModalClose}>
                <FontAwesomeIcon
                  icon={faSquareXmark}
                  size={35}
                  color="#0A96E6"
                />
              </TouchableOpacity>
              <View style={styles.modalButtonRow}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => openPdf("https://firebasestorage.googleapis.com/v0/b/arbookreader-50534.appspot.com/o/books%2FOliver%20twist-Charles%20Dickens.pdf?alt=media&token=7ab014d5-fb8f-4a91-9afb-95671dd69bf7")}>
                  <FontAwesomeIcon
                    icon={faBookReader}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.modalButtonText}>Read Book Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleModalClose}>
                  <FontAwesomeIcon
                    icon={faSpellCheck}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.modalButtonText}>Go to Dictionary</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  goBackButton: {
    backgroundColor: '#0A96E6',
    padding: 5,
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  coverImageContainer: {
    height: 400,
    backgroundColor: '#9993',
    borderRadius: 30,
    alignItems: 'center',
    overflow: 'hidden', // To ensure the image doesn't overflow its container
  },
  bookImage: {
    width: '70%',
    height: 400,
    overflow: 'hidden',
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    alignSelf: 'center',
  },
  bookCategory: {
    fontSize: 16,
    marginTop: 8,
  },
  bookAuthor: {
    fontSize: 16,
    marginTop: 8,
  },
  bookLanguage: {
    fontSize: 16,
    marginTop: 8,
  },
  bookAbstract: {
    fontSize: 16,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 16,
  },
  wishlistButton: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  reserveButton: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  iconTextContainer: {
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalButton: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default BookDetailsScreen;