import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/Logo/png/logo-white.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Sign in');
    };

    const height = useWindowDimensions().height;

    return (
        <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height*1}]} resizeMode='contain' />
        
        <CustomInput placeholder="E-mail" value={email} setValue={setEmail} secureTextEntry={false}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        
        <CustomButton text="Sign In" onPress={onSignInPressed}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#0A96E6',
    },
    logo: {
        width: 100,
        maxWidth: 300,
        maxHeight: 300,
    },
});
export default SignIn;
