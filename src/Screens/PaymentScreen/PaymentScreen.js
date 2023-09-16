import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const PaymentScreen = () => {
  // Sample user payment subscription details (replace with actual data)
  const subscriptionDetails = {
    subscriptionType: "Monthly",
    amountPaid: "$12.99",
    nextBillingDate: "July 15, 2023",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Subscription Details</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Subscription Type:</Text>
        <Text style={styles.value}>{subscriptionDetails.subscriptionType}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Amount Paid:</Text>
        <Text style={styles.value}>{subscriptionDetails.amountPaid}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Next Billing Date:</Text>
        <Text style={styles.value}>{subscriptionDetails.nextBillingDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    fontSize: 18,
    flex: 2,
  },
});

export default PaymentScreen;
