import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchScreen from '../SearchScreen/SearchScreen';
import HelpScreen from '../HelpScreen/HelpScreen';


const HomeScreen = () => {
    //const Tab = createBottomTabNavigator();


    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
        

                
    );
};


    

export default HomeScreen;