import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
//import Logo from '../../../assets/Logo/png/logo-white.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);


    const onSignInPressed = () => {
        console.warn('Sign In');

        navigation.navigate('SignIn');
    };

    const onSendPressed = () => {
        if (!isFormValid) {
          // Check if the form is not valid
          console.warn('Please enter your email.');
          return; // Don't proceed with sign-up
        }
        console.warn('send');

        navigation.navigate('NewPasswordScreen');
    };

    const checkFormValidity = () => {
        if (email) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
    // Call checkFormValidity whenever any input field or checkbox changes
    React.useEffect(() => {
        checkFormValidity();
    }, [email]);


    return (
        <View style={styles.root}>
        {/* <Image source={Logo} style={[styles.logo, {height: height*1}]} resizeMode='contain' /> */}
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.subheader}>We will sent a confirmation to your e-mail.</Text>
        
        <CustomInput placeholder="Enter your email here" value={email} setValue={setEmail}/>
        
        
        <CustomButton text="Send" onPress={onSendPressed}/>
        
        <CustomButton text="Back to Sign In" onPress={onSignInPressed} type="TERTIARY"/>
        
        

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
        //marginBottom: 80,
        margin: 30,
        alignItems: 'center',
    },
    subheader: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'regular',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'left',
        marginLeft: -9,
    },
});
export default ForgotPasswordScreen;
