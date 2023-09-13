import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, useWindowDimensions, View } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import Logo from '../../../assets/Logo/png/pixie-low-resolution-logo-white-on-transparent-background.png';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
    const navigation = useNavigation();

    const onStartPressed = () => {
        console.warn('start');

        navigation.navigate('SignIn');
    };

    const onRegisterPressed = () => {
        console.warn('register');

        navigation.navigate('SignUp');
    };

    return (
        <SafeAreaView style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <View style={styles.textContainer}>
                <Text style={styles.header}>Inspire a lifelong love of reading.</Text>
                <Text style={styles.subheader}>Get kids hooked on books with 1000+ imaginary worlds at their fingertips.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton text="Let's Start Reading" onPress={onStartPressed} bgColor="#ffff" fgColor="#0A96E6" />
                <CustomButton text="Don't have an account? Register Now" onPress={onRegisterPressed} type='TERTIARY' />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'space-between', // This will arrange the logo, text, and buttons vertically
        //alignItems: 'flex-start', // Align content to the left
        padding: 20,
        backgroundColor: '#0A96E6',
    },
    logo: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
    },
    textContainer: {
        alignItems: 'flex-start', // Align text to the left
        marginTop: -200, // Add some margin at the bottom
    },
    header: {
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subheader: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'regular',
        color: '#fff',
    },
    buttonContainer: {
        alignItems: 'center', // Make the button container full width
        marginBottom: 20, // Add some margin at the bottom
    },
});

export default LandingScreen;
