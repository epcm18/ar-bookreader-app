import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useSignup } from '../../hooks/useSignup.js';

import signUpPageHero from '../../../assets/signUpPageHero.png';

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorEmptyMessage, setErrorEmptyMessage] = useState(''); // error message if signup unsuccessfull
  const [errorValidMessage, setErrorValidMessage] = useState(''); // error message if any of the fields are empty

  const {signup, error, isLoading} = useSignup(); //  call the signup function

  const onSignInPressed = () => {
    console.warn('Sign in'); // go to sign in page
    navigation.navigate('SignIn');
    
    
  };

  const onSignUpPressed = async () => {
    if (!isFormValid) {
      setErrorValidMessage('Please fill in all fields and accept the Terms & Conditions.'); // set the error message for empty fields
      console.warn('Please fill in all fields and accept the Terms & Conditions.');
      return;
    }
  
    try {
      setErrorEmptyMessage(''); // Reset the error message when attempting to sign up
      // setIsLoading(true);;
      console.log("error", error, isLoading)
  
      // Call the signup function with the user data
      const err = await signup(firstName, lastName, email, password, confirmPassword);
      console.log("error2", error)
      if (err == null){
        console.warn('Sign Up successful');
        navigation.navigate('SignUpConfirm');
      }
      else{
        setErrorEmptyMessage('Please try again'); // Set the error message
        console.warn('Sign Up unsuccessful');
      }
    } catch (error) {
        console.error('Error during sign up:', error);
      // Handle error (you can set an error state here if needed)
    } 
  };
  

  const checkFormValidity = () => {
    if (firstName && lastName && email && password && checked) {
      setIsFormValid(true);
      setErrorValidMessage('');
    } else {
      setIsFormValid(false);
    }
  };

  // Call checkFormValidity whenever any input field or checkbox changes
  React.useEffect(() => {
    checkFormValidity();
  }, [firstName, lastName, email, password, checked]);

  const height = useWindowDimensions().height;

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Image source={signUpPageHero} style={styles.heroImage} resizeMode='contain' />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Register Yourself</Text>
        <Text style={styles.subheader}>Begin your journey with us today</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>First Name *</Text>
          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setFirstName}
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Last Name *</Text>
          <CustomInput
            placeholder="Last Name"
            value={lastName}
            setValue={setLastName}
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail *</Text>
          <CustomInput
            placeholder="E-mail"
            value={email}
            setValue={setEmail}
            secureTextEntry={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password *</Text>
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm Password *</Text>
          <CustomInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.errorMessage}>{errorEmptyMessage}</Text>

        <Text style={styles.errorMessage}>{errorValidMessage}</Text>

        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPressIn={() => setChecked(!checked)}
          />
          <Text style={styles.checkboxLabel}>I accept the Terms & conditions</Text>
        </View>
        <CustomButton text="Sign Up" onPress={onSignUpPressed} />
        <CustomButton text="Already have an account? Click Here" onPress={onSignInPressed} type='TERTIARY' />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A96E6',
  },
  heroImage: {
    position: 'absolute',
    bottom: 0,
    right: -20,
    width: 300,
    height: 300,
  },
  contentContainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
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
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: '#fff',
  },
  inputContainer:{
    marginBottom: 10,
    width: '100%',
  },
  inputLabel:{
    color: "#fff",
    fontFamily: 'Roboto',
  },
  errorMessage: {
    color: 'red', // Set the color to red
    fontSize: 14,
    textAlign: 'center',
  },
});

export default SignUp;
