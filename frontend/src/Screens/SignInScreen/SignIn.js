import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
//import Logo from '../../../assets/Logo/png/logo-white.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign in');
        // validate email and password

        // if valid, navigate to home screen
        navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');

        navigation.navigate('ForgotPasswordScreen');
    };

    const onSignUpPressed = () => {
        console.warn('Sign Up');

        navigation.navigate('SignUp');
    };

    // const height = useWindowDimensions().height;

    return (
        <View style={styles.root}>
        {/* <Image source={Logo} style={[styles.logo, {height: height*1}]} resizeMode='contain' /> */}
        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subheader}>Sign In to cotinue your journey</Text>
        <CustomInput placeholder="E-mail" value={email} setValue={setEmail} secureTextEntry={false}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type='TERTIARY'/>
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
        
        <CustomButton text="Don't have an account? Register Now" onPress={onSignUpPressed} type='TERTIARY'/>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0A96E6',
    },
    // logo: {
    //     width: 100,
    //     maxWidth: 300,
    //     maxHeight: 300,
    // },
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
        marginBottom: 80,
    },
});
export default SignIn;
