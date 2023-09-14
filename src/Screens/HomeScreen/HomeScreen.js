import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeroImage from "../../components/HeroImage";
import PdfRead from "../../components/PdfRead";

const HomeScreen = () => {
  const navigation = useNavigation();

  // Function to navigate to the PDF screen with a specific PDF URL
  const openPdf = (pdfUrl) => {
    navigation.navigate("PDF", { pdfUrl });
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openPdf(
              "https://firebasestorage.googleapis.com/v0/b/arbookreader-50534.appspot.com/o/(Saddleback%20Classics)%20Charles%20Dickens%2C%20Emily%20Hutchinson%20-%20Oliver%20Twist-Saddleback%20Publishing%20(1996).pdf?alt=media&token=4cef19db-d7ba-4222-a4c8-ff992e8f20ce"
            )
          }
        >
          <Text style={styles.buttonText}>Oliver Twist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openPdf(
              "https://your-pdf-url-2.com" // Replace with the actual URL of PDF 2
            )
          }
        >
          <Text style={styles.buttonText}>Open PDF 2</Text>
        </TouchableOpacity>
        {/* Add more buttons for other PDFs */}
      </View>
      <HeroImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align buttons to the left of the screen
    marginTop: 20,
  },
  button: {
    width: 80, // Adjust the width to make it square
    height: 80, // Adjust the height to make it square
    backgroundColor: "white", // Set the background color to white
    borderRadius: 10, // Adjust the border radius for rounded corners
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF", // Change the text color to blue
  },
});

export default HomeScreen;
