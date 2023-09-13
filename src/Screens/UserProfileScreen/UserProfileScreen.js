import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome'; 

const UserProfileScreen = () => {
    const navigation = useNavigation();

    const OnCustomizePressed = () => {
        console.warn('Customize');
        navigation.navigate('EditProfileScreen');
    };
    const OnSignOutPressed = () => {
        console.warn('Sign Out');
        navigation.navigate('LandingScreen');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.blueRectangle}>
                <View style={styles.profileContainer}>
                    {/* User Profile Picture (Assuming a circular image) */}
                    <View style={styles.profileImageWrapper}>
                        <Image
                            source={require("../../../assets/profile.jpeg")} // Add your image source here
                            style={styles.profileImage}
                        />
                        <TouchableOpacity onPress={OnCustomizePressed} style={styles.editIconWrapper}>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.levelCircle}>
                        <Text style={styles.levelText}>1</Text>
                    </View>
                    
                    
                </View>
                <Text style={styles.username}>Klazer123</Text>
                <CustomButton text="Customize" onPress={OnCustomizePressed} type='PRIMARY' bgColor="#fff" fgColor='#FF34DF'/>
                <CustomButton text="Sign Out" onPress={OnSignOutPressed} type='PRIMARY' bgColor="#fff" fgColor='#FF34DF'/>
            </View>
            <Text style={styles.header}>My Profile</Text>
            <Text style={styles.subheader}>Level 1 - Novice</Text>
            
            <View style={styles.divider}></View>

            <View style={styles.dashboard}>
                <View style={styles.dashboardItem}>
                    <Text style={styles.dashboardNumber}>1</Text>
                    <Text style={styles.dashboardLabel}>Books</Text>
                </View>
                <View style={styles.dashboardItem}>
                    <Text style={styles.dashboardNumber}>1.2</Text>
                    <Text style={styles.dashboardLabel}>Hours</Text>
                </View>
                <View style={styles.dashboardItem}>
                    <Text style={styles.dashboardNumber}>9</Text>
                    <Text style={styles.dashboardLabel}>Favourites</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    blueRectangle: {
        backgroundColor: "#0A96E6", // Blue color
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 55,
        marginVertical: 20,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    profileContainer: {
        alignItems: "center",
    },
    profileImageWrapper: {
        position: "relative",
        width: 120, 
        height: 120, 
        borderRadius: 60, 
        overflow: "hidden",
        marginBottom: 15,
    },
    profileImage: {
        width: "100%",
        height: "100%",
    },
    levelCircle: {
        position: "absolute",
        bottom: -10, // Adjust to control the intersection
        left: windowWidth * 0.10, // Adjust to control the intersection
        width: 40, // Adjust the circle size
        height: 40, // Make it a circle
        borderRadius: 20, // Half of width/height to make it a circle
        backgroundColor: "#FF34DF", // Circle color
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    levelText: {
        color: "white",
        fontWeight: "bold",
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    divider: {
        height: 10,
        backgroundColor: "#D9D9D9",
        marginHorizontal: 20,
        borderRadius: 20,
        marginTop: 30,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        textAlign: "center",
        color: "#0A96E6",
    },
    subheader: {
        fontSize: 15,
        textAlign: "center",
    },
    dashboard: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginTop: 20,
    },
    dashboardItem: {
        alignItems: "center",
    },
    dashboardNumber: {
        fontSize: 24,
        fontWeight: "bold",
    },
    dashboardLabel: {
        fontSize: 16,
        color: "#555", // Adjust label color
    },
    editIconWrapper: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#808080",
        borderRadius: 20, // Adjust as needed for your icon
        padding: 5,
    },
});

export default UserProfileScreen;
