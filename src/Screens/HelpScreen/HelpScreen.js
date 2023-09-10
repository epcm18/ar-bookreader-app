import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from "react-native";

import helpHero from '../../../assets/Help.jpeg';
import CustomButton from "../../components/CustomButton/CustomButton";
const height = Dimensions.get("window").height;


const HelpScreen = () => {
    
    const onLinkPressed = () => {
        console.warn('Link Pressed');
    };

    return (
        <ScrollView style={styles.container}>
            <Text>HelpScreen</Text>
            <Image source={helpHero} style={styles.hero} resizeMode="cover" />
                <View>
                    <Text style={styles.header}>Help Center</Text>
                    <Text style={styles.subheader}>How to read Augmented Reality Content</Text>
                    <View style={styles.pointsContainer}>
                    <PointText text="Add the Book:" content="Start by adding the book you want to read in AR to your Pixie library. Make sure that the book has AR content available." />
                    <PointText text="Get Your Physical Book:" content="Ensure you have the physical copy of the book you want to read in AR ready." />
                    <PointText text="Open the Book in Online Mode:" content="Launch the Pixie app and open the specific book you wish to read in AR. Make sure you're in online mode." />
                    <PointText text="Grant Camera Access:" content="When you try to access AR content, the app will request permission to use your device's camera. Grant access to proceed." />
                    <PointText text="Position Your Camera:" content="Hold your mobile device's camera above the page in the physical book. Ensure the page is well-lit and clear within your camera's viewfinder." />
                    <PointText text="Capture the AR Content:" content="As you hold the camera over the page, Pixie will automatically recognize the content and capture it. This process may take a moment." />
                    <PointText text="Enjoy the Augmented Reality:" content="Once captured, watch as the AR elements associated with the book come to life on your mobile screen. Interact with these magical enhancements and dive deeper into the story." />
                    </View>
                </View>
                <View style={styles.button}>
                    <CustomButton text= "If you have more questions please visit our website" onPress={onLinkPressed} type='TERTIARY' fgColor='#212122'/>
                    
                </View>
        </ScrollView>
    );
};

const PointText = ({ text, content }) => (
    <View style={styles.point}>
        <Text style={styles.bold}>{text}</Text>
        <Text style={styles.pointText}>{content}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hero: {
        width: "100%",
        height: height * 0.25,
    },
    header: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0A96E6',
        marginTop: 10,
    },
    subheader: {
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        marginTop: 10,
        marginLeft: 10,
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    pointsContainer: {
        marginLeft: 10,
        marginBottom: 10,
    },
    point: {
        marginBottom: 10,
    },
    pointText: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: '#555', // Change this color to grey
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        marginLeft: 10,
        textDecorationLine: 'underline',
        textAlign: 'left',
        alignItems: 'left',
        justifyContent: 'left',
    },
    
});

export default HelpScreen;