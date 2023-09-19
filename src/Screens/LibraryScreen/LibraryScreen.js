import React from "react";
import { View, Text, Platform, StyleSheet} from "react-native";
import Books from "../../components/Books/Books";

const LibraryScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Library Screen</Text> */}
            <Books />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default LibraryScreen;
