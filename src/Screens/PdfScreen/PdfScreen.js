import React from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import PdfRead from "../../components/PdfRead";

const PdfScreen = () => {
  const route = useRoute();
  const { pdfUrl } = route.params;

  return (
    <View style={styles.container}>
      <PdfRead pdfUrl={pdfUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PdfScreen;
