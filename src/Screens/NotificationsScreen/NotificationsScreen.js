import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Notifications</Text>
            <View style={styles.notification}>
                <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>New Book Added</Text>
                    <Text style={styles.notificationTime}>2 hours ago</Text>
                </View>
                <Text style={styles.notificationText}>You have added "All is well" to your library.</Text>
            </View>
            <View style={styles.notification}>
                <View style={styles.notificationHeader}>
                    <Text style={styles.notificationTitle}>Book Completed</Text>
                    <Text style={styles.notificationTime}>1 day ago</Text>
                </View>
                <Text style={styles.notificationText}>You finished reading "Puss in Boots".</Text>
            </View>
            {/* Add more notifications here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    notification: {
        backgroundColor: '#9998',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    notificationHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    notificationTime: {
        fontSize: 14,
        color: 'gray',
    },
    notificationText: {
        fontSize: 16,
    },
});

export default NotificationsScreen;
