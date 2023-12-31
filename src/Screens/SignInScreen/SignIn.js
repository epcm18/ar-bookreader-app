import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import signInPageHero from '../../../assets/signInPageHero.png';
import {useLogin} from '../../hooks/useLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {login, error, isLoading} = useLogin();

  const navigation = useNavigation();

  const onSignInPressed = async () => {
    // e.preventDefault();
    
    try{
      setErrorMessage(''); // Reset the error message when attempting to sign in
      console.log("error", error, isLoading);
      const err = await login(email, password); // call the login function
      console.log("error2", err)
      if (err == null){
        console.warn("Login successful");
        navigation.navigate('PaymentMethodScreen');
      }
      else{
        console.warn("Login unsuccessful");
        setErrorMessage(err); // Set the error message
      }
    }catch(error){
      console.error(error);
    }
    
    
  };

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot Password');

    navigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPressed = () => {
    // console.warn('Sign Up');

    navigation.navigate('SignUp');
  };

  const height = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.root}>
      {/* Absolute positioned hero image */}
      <Image
        source={signInPageHero}
        style={styles.heroImage}
        resizeMode="contain"
      />

      {/* Content container */}
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Welcome Back</Text>
        <Text style={styles.subheader}>Sign In to continue your journey</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email *</Text>
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

        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In"
          disabled={isLoading}
          onPress={onSignInPressed}
        />
        <CustomButton
          text="Don't have an account? Register Now"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0A96E6',
    //justifyContent: 'flex-end', // Align content to the bottom
  },
  heroImage: {
    position: 'absolute', // Position the hero image absolutely
    bottom: 0, // Place it at the bottom
    right: -20, // Place it at the right
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    alignSelf: 'flex-end', // Align the hero image to the right
  },
  contentContainer: {
    flex: 1, // Fill the available space
    //justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center',
    padding: 20,
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
  inputContainer: {
    // flex: 1,
    marginBottom: 20,
    width: '100%',
  },
  inputLabel:{
    fontFamily: 'Roboto',
    color: '#fff',
  },
  errorMessage: {
    color: 'red', // Set the color to red
    fontSize: 14,
    
  },
    
});

export default SignIn;