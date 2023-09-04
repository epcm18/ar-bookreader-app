import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
//import Logo from '../../../assets/Logo/png/logo-white.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const navigation = useNavigation();

    const [code, setCode] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Sign In');

        navigation.navigate('SignIn');
    };

    const onResetPressed = () => {
        if (!isFormValid) {
          // Check if the form is not valid
          console.warn('Please enter your details.');
          return; // Don't proceed with sign-up
        }
        console.warn('Password Reset');

        navigation.navigate('SignIn');
    };

    const checkFormValidity = () => {
        if (code && newPassword) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
    // Call checkFormValidity whenever any input field or checkbox changes
    React.useEffect(() => {
        checkFormValidity();
    }, [code, newPassword]);


    return (
        <View style={styles.root}>
        {/* <Image source={Logo} style={[styles.logo, {height: height*1}]} resizeMode='contain' /> */}
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.subheader}>We have sent a code to your e-mail. Enter that here.</Text>
        
        <CustomInput placeholder="Enter your code here" value={code} setValue={setCode}/>
        
        <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword}/>
        <CustomButton text="Reset" onPress={onResetPressed}/>
        
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
export default NewPasswordScreen;
