import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from '../Screens/SignInScreen/SignIn';
import SignUp from '../Screens/SignUpScreen/SignUp';
import SignUpConfirm from '../Screens/SignUpConfirmScreen/SignUpConfirm';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';  
import NewPasswordScreen from '../Screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LandingScreen from '../Screens/LandingScreen/LandingScreen';

import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import HelpScreen from '../Screens/HelpScreen/HelpScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}   
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home', 
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} /> 
                )}
            }
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ title: 'Search',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={size} />
                ) }}
            />
            <Tab.Screen
                name="Help"
                component={HelpScreen}
                options={{ title: 'Help',
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="help-circle" color={color} size={size} />
                ) }}
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
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default Navigation;