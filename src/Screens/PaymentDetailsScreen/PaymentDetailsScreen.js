import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const PaymentDetailsScreen = () => {

    const navigation = useNavigation();
  // State to store user data
  const [userData, setUserData] = useState({
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Function to handle form submission
  const handlePaymentSubmit = () => {
    // Implement your payment logic here
    console.warn('Payment submitted with data:', userData);
    navigation.navigate('HomeScreen');

    // You can integrate with a payment gateway here
  };

  return (
    <View style={styles.container}>
      
        {/* Payment Details Form */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Payment Details</Text>

          {/* Full Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={userData.fullName}
            onChangeText={(text) => setUserData({ ...userData, fullName: text })}
          />

          {/* Card Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={userData.cardNumber}
            onChangeText={(text) => setUserData({ ...userData, cardNumber: text })}
          />

          {/* Expiration Date Input */}
          <TextInput
            style={styles.input}
            placeholder="Expiration Date"
            value={userData.expirationDate}
            onChangeText={(text) => setUserData({ ...userData, expirationDate: text })}
          />

          {/* CVV Input */}
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={userData.cvv}
            onChangeText={(text) => setUserData({ ...userData, cvv: text })}
          />

          {/* Payment Button */}
          <TouchableOpacity style={styles.paymentButton} onPressIn={handlePaymentSubmit}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#0A96E6',
  },
  
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  paymentButton: {
    backgroundColor: '#0A96E6',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentDetailsScreen;
