import React from "react";
import { View, Text, Image, StyleSheet, Dimensions , ScrollView} from "react-native";

import publishHero from '../../../assets/Publish.jpeg';
import CustomButton from "../../components/CustomButton/CustomButton";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const PublishScreen = () => {
    const onLinkPressed = () => {
        console.warn('Link Pressed');
    };

    return (
        <ScrollView style={styles.container}>
            <Text>PublishScreen</Text>
            <Image source={publishHero} style={styles.hero} resizeMode="cover" />
            <Text style={styles.header}>Unlock Your Inner Author with Pixie!</Text>
            <View style={styles.grayBox}>
                <Text style={styles.grayBoxText}>
                    <Text style={styles.italicText}>At Pixie, we believe that everyone has a story to tell. That's why we've made it incredibly easy for aspiring authors to share their creativity with the world. With just a visit to our website, you'll discover all the essential instructions and tools needed to become a published author.</Text>{"\n\n"}
                    <Text style={styles.italicText}>So, whether you're an experienced wordsmith or simply have a captivating tale to share, Pixie welcomes you to embark on your literary journey today. Unleash your imagination, and let your stories flourish with Pixie!</Text>
                </Text>
            </View>
            <View style={styles.button}>
            <CustomButton text= "Visit our website" onPress={onLinkPressed} type='TERTIARY' fgColor='#212122'/>
            </View>
            
        </ScrollView>
    );
};

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
    grayBox: {
        margin: 10,
        backgroundColor: "#ccc", 
        padding: 16,
        borderRadius: 15,
    },
    grayBoxText: {
        color: "#000", 
        fontStyle: 'italic',
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
    },
    header: {
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0A96E6',
        marginTop: 10,
    },
    button: {
        alignItems: 'center',
    },
});

export default PublishScreen;