import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { Modal } from "react-native-paper";
// import CountryPicker from 'react-native-country-picker-modal';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../hooks/useAuthContext";
import useEditProfile  from "../../hooks/useEditProfile";


const EditProfileScreen = () => {

  const navigation = useNavigation();
  const context = useAuthContext();
  const { editProfile, error, isLoading } = useEditProfile();
  // Define state variables for user information
  const [firstName, setFirstName] = useState(context.user.firstName);
  const [lastName, setLastName] = useState(context.user.lastName);
  const [email, setEmail] = useState(context.user.email);
  const [profileImage, setProfileImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null); // State for selected country

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const minDate = new Date("1970-12-12"); // Minimum allowed date
  const startDate = getFormatedDate(today, "YYYY-MM-DD");
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [startedDate, setStartedDate] = useState(startDate);

  const [refreshKey, setRefreshKey] = useState(0);
  const [updateMsg, setUpdateMsg] = useState(''); // error message 
  

  // const firstName = context.user.firstName;
  // const lastName = context.user.lastName;
  const profilePic = context.user.profilePicture;
  const userName = context.user.email.split('@')[0];


  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnChangedStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  function renderDatePicker() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View style={styles.datePickerContainer}>
          <View style={styles.datePickerContent}>
            <DatePicker
              mode="calendar"
              minimumDate={minDate}
              maximumDate={today} // No dates beyond today
              selected={startedDate}
              onDateChange={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: "#0A96E6",
                textHeaderColor: "#FFFFFF",
                textDefaultColor: "#FFFFFF",
                selectedTextColor: "#0066CC",
                mainColor: "#FFFFFF",
                textSecondaryColor: "#FFFFFF",
                borderColor: "#0066CC",
              }}
            />
            <TouchableOpacity onPress={handleOnChangedStartDate}>
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  // Function to handle profile picture upload
  const selectProfileImage = () => {
    console.warn("Profile Image Selected");
  };

  // Function to save changes
  const saveChanges = () => {
     // Create a FormData object to send to the API
     const formData = new FormData();
     formData.append("firstName", firstName);
     formData.append("lastName", lastName);
     formData.append("email", email);
     formData.append("startDate", selectedStartDate);
     // Add other fields as needed
 
     // Call the editProfile function to update the profile
     editProfile(formData);
     setRefreshKey(refreshKey+1);
     setUpdateMsg('Profile Updated Successfully');
  };

  return (
    <View key={refreshKey} style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <TouchableOpacity >
          <View style={styles.profileImageWrapper}>
            <Image
              source={{uri: profilePic}}
              style={styles.profileImage}
            />

          </View>
          <FontAwesomeIcon icon={faPencilSquare} color="#FFF" size={25} onPress={selectProfileImage} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <Text
          style={styles.input}
          >{userName}</Text>
          
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter firstname"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter lastname"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={context.user.email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity
          style={styles.input}
          placeholder="Date of Birth"
          value={selectedStartDate}
          onPress={handleOnChangedStartDate}
        >
          <Text>{selectedStartDate}</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <View style={styles.countryInput}>
          <CountryPicker
            {...{
              countryCode: selectedCountry,
              onSelect: (country) => setSelectedCountry(country.cca2),
            }}
            withFilter
            withFlag
            withAlphaFilter
            withCallingCode
            withEmoji
            withCountryNameButton
          />
        </View>
      </View> */}
      {renderDatePicker()}
      <Text style={styles.errorMessage}>{updateMsg}</Text>
      <View style={styles.button}>
        <Button title="Save Changes" onPress={saveChanges} />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerContainer: {
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginHorizontal: 10,
    borderRadius: 20,
  },
  datePickerContent: {
    backgroundColor: "#0A96E6", // Blue background
    padding: 20,
    borderRadius: 20,
  },
  closeButtonText: {
    textAlign: "center",
    color: "#FFFFFF", // White text
  },
  profileImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
    backgroundColor: "lightgray",
    marginBottom: 10,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "column",
    marginBottom: 6,
    marginHorizontal: 5,
  },
  label: {
    margin: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  countryInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    //marginBottom: 10,
    margin: 20,
  },
  profileImageWrapper: {
    position: "relative",
    width: 120, // Adjust the size as needed
    height: 120, // Adjust the size as needed
    borderRadius: 60, // Half of the width and height to create a circle
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#808080",
    borderRadius: 5, // Adjust as needed for your icon
    padding: 0,

  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'black', // Set the color
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EditProfileScreen;
