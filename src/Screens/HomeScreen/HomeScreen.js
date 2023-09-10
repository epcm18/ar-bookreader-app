import React from "react";
import { View, Text, image, StyleSheet, Dimensions } from "react-native";


import HeroImage from "../../components/HeroImage";

const HomeScreen = () => {
    //const Tab = createBottomTabNavigator();


    return (
        <View style={Styles.container}>
            <HeroImage/>
            {/* <Text>HomeScreen</Text> */}
        </View> 
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
    

export default HomeScreen;