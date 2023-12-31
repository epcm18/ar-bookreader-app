import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
// import SignIn from './src/Screens/SignInScreen/SignIn';
// import SignUp from './src/Screens/SignUpScreen/SignUp';
// import SignUpConfirm from './src/Screens/SignUpConfirmScreen/SignUpConfirm';
// import ForgotPasswordScreen from './src/Screens/ForgotPasswordScreen';
// import NewPasswordScreen from './src/Screens/NewPasswordScreen copy/NewPasswordScreen';
// import LandingScreen from './src/Screens/LandingScreen/LandingScreen';
import EditProfileScreen from './src/Screens/EditProfileScreen/EditProfileScreen';
import Navigation from './src/navigation';
import {AuthContextProvider} from './src/context/AuthContext';
// import { FavoritesProvider } from './src/hooks/useFavouriteContext';
const App = () => {
  return (
    <AuthContextProvider>
      
      <SafeAreaView style={styles.root}>
        {/* <EditProfileScreen/> */}
        <Navigation />
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