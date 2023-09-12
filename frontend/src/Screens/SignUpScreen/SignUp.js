import React, {useState} from 'react';
import { Checkbox } from 'react-native-paper';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ScrollViewComponent} from 'react-native';
//import Logo from '../../../assets/Logo/png/logo-white.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const onSignInPressed = () => {
        console.warn('Sign in');

        navigation.navigate('SignIn');
    };

    const onSignUpPressed = () => {
        if (!isFormValid) {
          // Check if the form is not valid
          console.warn('Please fill in all fields and accept the Terms & Conditions.');
          return; // Don't proceed with sign-up
        }
        console.warn('Sign Up');
        navigation.navigate('SignUpConfirm');
    };

    const checkFormValidity = () => {
        if (firstName && lastName && userName && email && password && checked) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };
    // Call checkFormValidity whenever any input field or checkbox changes
    React.useEffect(() => {
        checkFormValidity();
    }, [firstName, lastName, userName, email, password, checked]);

    // const height = useWindowDimensions().height;

    return (
        <ScrollView contentContainerStyle={styles.root}>
        {/* <Image source={Logo} style={[styles.logo, {height: height*1}]} resizeMode='contain' /> */}
        <Text style={styles.header}>Register Yourself</Text>
        <Text style={styles.subheader}>Begin your journey with us today</Text>
        <CustomInput placeholder="First Name" value={firstName} setValue={setFirstName} secureTextEntry={false}/>
        <CustomInput placeholder="Last Name" value={lastName} setValue={setLastName} secureTextEntry={false}/>
        <CustomInput placeholder="Username" value={userName} setValue={setUserName} secureTextEntry={false}/>
        <CustomInput placeholder="E-mail" value={email} setValue={setEmail} secureTextEntry={false}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        
        <View style={styles.checkboxContainer}>
        <Checkbox.Android 
          status={checked ? 'checked' : 'unchecked'} 
          onPress={() => setChecked(!checked)} 
        />
        <Text style={styles.checkboxLabel}>I accept the Terms & conditions</Text>
      </View>
        
        <CustomButton text="Sign Up" onPress={onSignUpPressed}/>
        
        <CustomButton text="Already have an account? Click Here" onPress={onSignInPressed} type='TERTIARY'/>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        flexGrow: 1, // Use flexGrow to make sure content fits the screen when the keyboard is open
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkboxLabel: {
        color: '#fff',
      },
});
export default SignUp;
