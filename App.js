

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignIn from './src/Screens/SignInScreen/SignIn';
import SignUp from './src/Screens/SignUpScreen/SignUp';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUp/>
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
