import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import FavouritesScreen from '../FavouritesScreen/FavouritesScreen';
import BookCard from '../../components/BookCard';
import Activity from '../../components/Activity';
import { useAuthContext } from '../../hooks/useAuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing user data

const UserProfile = () => {
  const navigation = useNavigation();

  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('Activity');

  const [appUsageTime, setAppUsageTime] = useState(0);

  // Use a ref to store the interval timer ID
  const usageTimerRef = useRef(null);

  useEffect(() => {
    // Load the previously stored usage time when the component mounts
    AsyncStorage.getItem('appUsageTime')
      .then((time) => {
        if (time) {
          setAppUsageTime(parseInt(time));
        }
      })
      .catch((error) => {
        console.error('Error loading app usage time:', error);
      });
  }, []);

  useEffect(() => {
    // Save the usage time when the component unmounts
    return () => {
      clearInterval(usageTimerRef.current);
      AsyncStorage.setItem('appUsageTime', String(appUsageTime))
        .catch((error) => {
          console.error('Error saving app usage time:', error);
        });
    };
  }, [appUsageTime]); ////////////////////

  useEffect(() => {
    // Start a timer that increments appUsageTime every minute
    usageTimerRef.current = setInterval(() => {
      setAppUsageTime((prevTime) => prevTime + 1); // Increment by 60 seconds
    }, 1000); // 60,000 milliseconds = 60 seconds = 1 minute
  }, []);

  ////
  const onTabPress = tabName => {
    // Update the active tab when a tab is pressed
    setActiveTab(tabName);
  };

  const onEditProfile = () => {
    // Handle edit profile action
    console.warn('Edit Profile');
    navigation.navigate('EditProfileScreen');
  };

  const onDictionary = () => {
    // Handle dictionary action
    console.log('Dictionary');
    navigation.navigate('DictionaryScreen');
  };

  const onSignOut = () => {
    // Handle sign out action
    console.log('Sign Out');
    navigation.navigate('LandingScreen');
  };

  const toggleOptionsMenu = () => {
    setShowOptionsMenu(!showOptionsMenu);
  };

  const onHelp = () => {
    console.warn('Help');
    navigation.navigate('HelpScreen');
  };
  const onPublish = () => {
    console.warn('Publish');
    navigation.navigate('PublishScreen');
  };

  const onPayment = () => {
    console.warn('Payment');
    navigation.navigate('PaymentScreen');
  };
  ////

  const context = useAuthContext(); // Access user data from the context
  console.log("here2");
  console.log(context);

  const userName = context.user.email.split('@')[0]; // Extract the username from the

  const numOFBooks = context.user.addToLibrary.length;

  const profielPic = context.user.profilePicture;

  let userLevel = '';
  let userLevelNum = 0;

  if (numOFBooks<5){
    userLevel = 'Novice';
    userLevelNum = 1;
  }
  if (numOFBooks>5 && numOFBooks<10){
    userLevel = 'Enthusiast';
    userLevelNum = 2;
  }
  if(numOFBooks>10){
    userLevel = 'Book Worm'
    userLevelNum = 3;
  }


  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>{userName}</Text>
        <TouchableOpacity onPressIn={toggleOptionsMenu}>
          <FontAwesomeIcon icon={faEllipsisV} size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Image
          source={{uri: profielPic}} // Replace with your profile picture
          style={styles.profilePicture}
        />
        <Text style={styles.username}>{'@'+userName}</Text>
        <Text style={styles.level}>Level {userLevelNum} - {userLevel}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPressIn={onEditProfile}
            style={styles.editProfileButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={onDictionary}
            style={styles.dictionaryButton}>
            <Text style={styles.buttonText}>Dictionary</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dashboard */}
      <View style={styles.dashboard}>
        {/* Display your dashboard items here */}
        <View style={styles.dashboardItem}>
          <Text style={styles.dashboardNumber}>{numOFBooks}</Text>
          <Text style={styles.dashboardLabel}>Books</Text>
        </View>
        <View style={styles.dashboardItem}>
        <Text style={styles.dashboardNumber}>{appUsageTime} min</Text>
        <Text style={styles.dashboardLabel}>App Usage</Text>
      </View>
        <View style={styles.dashboardItem}>
          <Text style={styles.dashboardNumber}>11</Text>
          <Text style={styles.dashboardLabel}>Favourites</Text>
        </View>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'Activity' && styles.activeTab]}
          onPressIn={() => onTabPress('Activity')}>
          <Text style={styles.tabText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === 'Favorites' && styles.activeTab,
          ]}
          onPressIn={() => onTabPress('Favorites')}>
          <Text style={styles.tabText}>Favorites</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'Activity' && (
        /* Content for the "" tab */
        <View style={styles.content}>
          {/* Display content here */}
          <Text style={styles.activityHeader}>Continue Your Journey</Text>
        </View>
      )}

      {activeTab === 'Favorites' && (
        /* Content for the "Favorites" tab */
        <View style={styles.content}>
          {/* Display favorite content here */}

          <FavouritesScreen />
        </View>
      )}
      {/* Options Menu */}
      {showOptionsMenu && (
        <View style={styles.optionsMenu}>
          <TouchableOpacity onPressIn={onHelp} style={styles.optionItem}>
            <Text style={styles.optionText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={onPublish} style={styles.optionItem}>
            <Text style={styles.optionText}>Publish</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={onPayment} style={styles.optionItem}>
            <Text style={styles.optionText}>Payment Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={onSignOut} style={styles.optionItem}>
            <Text style={styles.optionText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  level: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  editProfileButton: {
    borderWidth: 2,
    borderColor: '#0A84FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  dictionaryButton: {
    borderWidth: 2,
    borderColor: '#0A84FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#0A84FF',
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  dashboardItem: {
    alignItems: 'center',
    marginVertical: 5, // Reduced margin here
  },
  dashboardNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dashboardLabel: {
    fontSize: 16,
    color: 'gray',
  },
  optionsMenu: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  optionItem: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2, // Bottom border to indicate active tab
    borderColor: 'transparent', // Initially no border
  },
  activeTab: {
    borderColor: '#0A84FF', // Border color for active tab
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  content: {
    flex: 1,
    padding: 10,
    // Add styles for the content of each tab
  },
  activityHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserProfile;