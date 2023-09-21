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
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isLoading} = useLogin();

  const navigation = useNavigation();

  const onSignInPressed = async () => {
    //e.preventDefault();
    //await login(email, password);
    navigation.navigate('PaymentMethodScreen');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');

    navigation.navigate('ForgotPasswordScreen');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Up');

    navigation.navigate('SignUp');
  };

  const height = useWindowDimensions().height;

  return (
    <View style={styles.root}>
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
        <CustomInput
          placeholder="E-mail"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
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
    </View>
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
});

export default SignIn;
