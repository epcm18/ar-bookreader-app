

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignIn from './src/Screens/SignInScreen/SignIn';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn/>
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
