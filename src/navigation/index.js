import React from 'react';
import {View, Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import SignIn from '../Screens/SignInScreen/SignIn';
import SignUp from '../Screens/SignUpScreen/SignUp';
import SignUpConfirm from '../Screens/SignUpConfirmScreen/SignUpConfirm';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LandingScreen from '../Screens/LandingScreen/LandingScreen';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen';
import PaymentMethodScreen from '../Screens/PaymentMethodScreen/PayementMethodScreen';
import PaymentDetailsScreen from '../Screens/PaymentDetailsScreen/PaymentDetailsScreen';

import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import HelpScreen from '../Screens/HelpScreen/HelpScreen';
import PublishScreen from '../Screens/PublishScreen/PublishScreen';
import UserProfileScreen from '../Screens/UserProfileScreen/UserProfileScreen';
import BookDetailsScreen from '../Screens/BookDetailsScreen/BookDetailsScreen';
import Books from '../components/Books/Books';
import NotificationsScreen from '../Screens/NotificationsScreen/NotificationsScreen';
import LibraryScreen from '../Screens/LibraryScreen/LibraryScreen';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import DictionaryScreen from '../Screens/DictionaryScreen/DictionaryScreen';
import FavoritesScreen from '../Screens/FavouritesScreen/FavouritesScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faBook,
  faHome,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

import {createStackNavigator} from '@react-navigation/stack';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PdfScreen from '../Screens/PdfScreen';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <FontAwesomeIcon icon={faHome} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({size, color}) => (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FF34DF',
                  height: Platform.OS === 'android' ? 60 : 60,
                  width: Platform.OS === 'android' ? 60 : 60,
                  top: Platform.OS === 'android' ? -10 : -20,
                  borderRadius: Platform.OS === 'android' ? 25 : 30,
                  borderWidth: 2,
                  borderColor: '#fff',
                }}>
                <FontAwesomeIcon icon={faUserCircle} color="#fff" size={30} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
          tabBarIcon: ({size, color}) => (
            <FontAwesomeIcon icon={faBell} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          title: 'Library',
          tabBarIcon: ({size, color}) => (
            <FontAwesomeIcon icon={faBook} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpConfirm" component={SignUpConfirm} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen
          name="PaymentMethodScreen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen
          name="PaymentDetailsScreen"
          component={PaymentDetailsScreen}
        />
        <Stack.Screen name="HomeScreen" component={Home} headerShown={true} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="SearchScreen" component={Books} />
        <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="PublishScreen" component={PublishScreen} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="DictionaryScreen" component={DictionaryScreen} />
        <Stack.Screen name="FavouritesScreen" component={FavoritesScreen} />
        <Stack.Screen name="PDF" component={PdfScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;