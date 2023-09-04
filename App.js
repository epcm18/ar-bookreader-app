

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
// import SignIn from './src/Screens/SignInScreen/SignIn';
// import SignUp from './src/Screens/SignUpScreen/SignUp';
// import SignUpConfirm from './src/Screens/SignUpConfirmScreen/SignUpConfirm';
// import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';  
// import NewPasswordScreen from './src/Screens/NewPasswordScreen copy/NewPasswordScreen';
// import LandingScreen from './src/Screens/LandingScreen/LandingScreen';
import Navigation from './src/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',

  },
});

export default App;
