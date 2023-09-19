import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import heroImage from '../../../assets/MainTopImg.jpeg';

const HeroImage = () => {
    return (
        <View style={styles.container}>
            <Image source={heroImage} style={styles.hero} resizeMode='contain' />
        </View>
    );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    hero: {
        width: "100%",
        height: height * 1.2, // Adjust this value to make it 1/5 of the screen height
    },
});

export default HeroImage;
