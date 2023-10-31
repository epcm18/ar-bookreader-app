import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import bgImg from "../../../assets/paymentbg.png";

import { useNavigation } from "@react-navigation/native";
const PaymentMethodScreen = () => {
    const navigation = useNavigation();
    const onTrialPress = () => {
        console.warn('Enjoy your free trial');
        navigation.navigate('HomeScreen');
    };

    const onPayNowPress = () => {
        console.warn('Pay Now');
        navigation.navigate('PaymentDetailsScreen');
    };

  return (
    
    <View style={styles.container}>
        <ImageBackground source={bgImg} style={styles.background}>

        </ImageBackground>
      <View style={styles.row}>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>MONTHLY</Text>
          <Text style={styles.priceText}>$12.99/month</Text>
          <TouchableOpacity style={styles.payButton} onPressIn={onPayNowPress}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionContainer}>
            {/* <Image source={bgImg} style={styles.background}/> */}
          <Text style={styles.optionTextAnnual}>ANNUAL</Text>
          <Text style={styles.priceTextAnnual}>$109.99/year</Text>
          <TouchableOpacity style={styles.payButtonAnnual}>
            <Text style={styles.buttonTextAnnual}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.header}>Try PIXIE for free!</Text>
      <View>
      <TouchableOpacity style={styles.trialbutton} onPressIn={onTrialPress}>
            <Text style={styles.trailbuttontext}>Enjoy your free trial</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    },

  container: {
    flex: 1,
    backgroundColor: "#0A96E6",
    justifyContent: "center", // Align items at the top
    alignItems: "center",
    paddingTop: 50,
  },
  row: {
    flexDirection: "row", // Arrange the boxes horizontally
    justifyContent: "space-between", // Add space between the boxes
    alignItems: "flex-start", // Align items at the top
    width: "100%",
    paddingHorizontal: 16, // Add horizontal padding
    
  },
  optionContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 50,
    flex: 1, // Equal width for both boxes
    alignItems: "center",
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 24,
    color: "#0A96E6",
    marginBottom: 10,
  },
  optionTextAnnual: {
    fontSize: 24,
    color: "#E9559B",
    marginBottom: 10,
  },
  priceText: {
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    fontWeight: "bold",
  },
  priceTextAnnual: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#0A96E6",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  payButtonAnnual: {
    backgroundColor: "#E9559B",
    padding: 10,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  buttonTextAnnual: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
    header: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    },
    trialbutton: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
    },
    trailbuttontext: {
    color: "#0A96E6",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    },
});

export default PaymentMethodScreen;
