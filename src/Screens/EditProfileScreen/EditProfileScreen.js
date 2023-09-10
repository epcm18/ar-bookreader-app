import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, TextInput, Button } from "react-native";

const EditProfileScreen = () => {
  // Define state variables for user information
  const [username, setUsername] = useState("Klazer123");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  // Function to handle profile picture upload
  const handleImageUpload = () => {
    // Implement logic to upload and set the new profile image
  };

  // Function to save changes
  const saveChanges = () => {
    // Implement logic to save changes to user information
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={handleImageUpload}>
        {/* <Image
          source={profileImage ? { uri: profileImage } : require("path-to-default-image")}
          style={styles.profileImage}
        /> */}
      </TouchableOpacity>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      {/* Bio Input */}
      <TextInput
        style={styles.input}
        placeholder="Bio"
        multiline={true}
        numberOfLines={4}
        value={bio}
        onChangeText={(text) => setBio(text)}
      />

      {/* Save Button */}
      <Button title="Save Changes" onPress={saveChanges} />

      {/* Other editable fields can be added here */}
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
  profileImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
    backgroundColor: "lightgray",
    marginBottom: 10,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default EditProfileScreen;
