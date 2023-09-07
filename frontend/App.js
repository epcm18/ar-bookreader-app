import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import SignIn from "./src/Screens/SignInScreen/SignIn";
import { AuthContextProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <SafeAreaView style={styles.root}>
        <SignIn />
      </SafeAreaView>
    </AuthContextProvider>
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
