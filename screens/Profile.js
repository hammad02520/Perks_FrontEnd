import React, { useState } from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, Image, Modal, TouchableOpacity, Alert} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { logoSvgCode, profilepic, editicon, profileicon, phonecallicon, bookicon, calendericon, mailicon, globeicon, logoutIcon } from '../svgData/svgData'; // Import the SVG data
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import styles from '../screenstyles/profileStyles';
import CheckBox from "expo-checkbox";
import DateTimePicker from './../node_modules/@react-native-community/datetimepicker/src/datetimepicker';
import {usePerksContext} from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalComponent = ({ isVisible, onClose, children }) => (
  <Modal visible={isVisible} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {children}
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Profile = (props) => {
    const navigation = useNavigation();
    const [isNameModalVisible, setIsNameModalVisible] = useState(false);
    const [isNumberModalVisible, setIsNumberModalVisible] = useState(false);
    const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);
    const [isDobModalVisible, setIsDobModalVisible] = useState(false);
    const [isEmailModalVisible, setIsEmailModalVisible] = useState(false);
    const [agreeFemale, setAgreeFemale] = useState(false); // for the checkbox
    const [agreeMale, setAgreeMale] = useState(false); // for the checkbox
    // const {firstName, lastName, email, phoneNumber} = props.route.params;
    const {currentUser} = usePerksContext()
    const [nameText, setNameText] = useState('');
    const [numberText, setNumberText] = useState('');
    const [genderText, setGenderText] = useState('');
    // const [dobText, setDobText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [pickedImage, setPickedImage] = useState();


    const closeModal = () => {
      setIsNameModalVisible(false);
      setIsNumberModalVisible(false);
      setIsGenderModalVisible(false);
      setIsDobModalVisible(false);
      setIsEmailModalVisible(false);
    };

    const openNameModal = () => {
      setIsNameModalVisible(true);
      setIsNumberModalVisible(false);
      setIsGenderModalVisible(false);
      setIsDobModalVisible(false);
      setIsEmailModalVisible(false);
    };

    const openNumberModal = () => {
      setIsNumberModalVisible(true);
      setIsNameModalVisible(false);
      setIsGenderModalVisible(false);
      setIsDobModalVisible(false);
      setIsEmailModalVisible(false);
    };

    const openGenderModal = () => {
      setIsGenderModalVisible(true);
      setIsNameModalVisible(false);
      setIsNumberModalVisible(false);
      setIsDobModalVisible(false);
      setIsEmailModalVisible(false);
    };

    const openDobModal = () => {
      setIsDobModalVisible(true);
      setIsNameModalVisible(false);
      setIsNumberModalVisible(false);
      setIsGenderModalVisible(false);
      setIsEmailModalVisible(false);
    };

    const openEmailModal = () => {
      setIsEmailModalVisible(true);
      setIsNameModalVisible(false);
      setIsNumberModalVisible(false);
      setIsGenderModalVisible(false);
      setIsDobModalVisible(false);
    };

    const handlePhoneNumberChange = (text) => {
      // Remove any non-digit characters from the input
      const cleanedPhoneNumber = text.replace(/[^0-9]/g, '');

      // Limit the input to 10 digits
      if (cleanedPhoneNumber.length <= 10) {
        setNumberText(cleanedPhoneNumber);
      }
    };

    const pickImage = async () => {
        console.log("-----------------------")
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setPickedImage(result.assets[0].uri);
        }
    };
    const handleLogout = () => {
        // Display a confirmation dialog before logging out
        Alert.alert(
            'Logout Confirmation',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: async () => {
                        // Clear AsyncStorage and any other necessary cleanup
                        await AsyncStorage.clear();

                        // Navigate to the Login screen
                        navigation.navigate('Login');
                    },
                    style: 'destructive', 
                },
            ],
            { cancelable: false }
        );
    };

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  const onOpenDatePicker = () => {
    setIsDatePickerOpen(true);
  };

  const onCloseDatePicker = () => {
    setIsDatePickerOpen(false);
  };
  const handleProfileImageTap = () => {
    console.log('the user has called')
  };

    let onDateChange = () => {

    };
    return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backgroundContainer}>
        <Image
          source={require('../assets/images/darkPurpleBackground.png')}
          style={styles.backgroundImage}
        />
        <SvgXml xml={logoSvgCode} style={styles.logoImage} />
        <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => {
                pickImage().then(r => {
                    console.log("------")})
            }} style={styles.profile2}>
                  <SvgXml xml={profilepic} style={styles.profile} />
            </TouchableOpacity>
          <View style={styles.profileText}>
            <Text style={styles.nameText}>{currentUser?.fname} {currentUser?.lname}</Text>
            <Text style={styles.emailText}>{currentUser?.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.trying}>
            {/* Your profile content goes here */}
            <Text style={styles.titleText}>Settings for Profile</Text>
            {/* Rectangle containers */}
            <View style={styles.rectangleContainer}>
                <SvgXml xml={profileicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>{currentUser?.fname} {currentUser?.lname}</Text>
                <TouchableOpacity onPress={openNameModal}>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={phonecallicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>{currentUser.phone_number}</Text>
                <TouchableOpacity onPress={openNumberModal}>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={profileicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Gender</Text>
                <TouchableOpacity onPress={openGenderModal}>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={calendericon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Date of birth</Text>
                <TouchableOpacity onPress={onOpenDatePicker}>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity>
                {isDatePickerOpen && (
                  <DateTimePicker
                    value={new Date()}
                    onChange={onDateChange}
                    mode="date"
                    onClose={onCloseDatePicker}
                  />
                )}
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={mailicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Email</Text>
                <TouchableOpacity onPress={openEmailModal}>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={globeicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Language</Text>
                <Text style= {styles.defaultText}>(English)</Text>
                {/* <TouchableOpacity>
                    <SvgXml xml={editicon} style={styles.editIcon} />
                </TouchableOpacity> */}
            </View>

            {/* Modal */}

            <ModalComponent isVisible={isNameModalVisible} onClose={closeModal}>
              <TextInput
                style={styles.modalTextInput}
                multiline
                placeholder="Enter your new username"
                value={nameText}
                onChangeText={setNameText}
              />
            </ModalComponent>

            <ModalComponent isVisible={isNumberModalVisible} onClose={closeModal}>
              <TextInput
                placeholder="Enter your new phone number"
                keyboardType="phone-pad" // This keyboard type only allows numeric input
                value={numberText}
                onChangeText={handlePhoneNumberChange}
                maxLength={10} // Limit input to 10 characters
                style={styles.modalTextInput}
              />
            </ModalComponent>

            <ModalComponent isVisible={isGenderModalVisible} onClose={closeModal}>
            <Text style={styles.modalTitle}>Select your gender</Text>
              <View style={styles.genderOptions}>
              <CheckBox
                value={agreeFemale}
                onValueChange={() => {
                  setAgreeFemale(!agreeFemale);
                  setAgreeMale(agreeMale ? !agreeMale : null);
                  setGenderText('Female'); // Update gender text on selection
                }}
                color={agreeFemale ? '#4630EB' : undefined}
              />
                <Text style={styles.genderOption}>Female</Text>

                <CheckBox
                  value={agreeMale}
                  onValueChange={() => {
                    setAgreeMale(!agreeMale);
                    setAgreeFemale(agreeFemale ? !agreeFemale : null);
                    setGenderText('Male'); // Update gender text on selection
                  }}
                  color={agreeMale ? '#4630EB' : undefined}
                />
                <Text style={styles.genderOption}>Male</Text>
              </View>
            </ModalComponent>

            {/* <ModalComponent isVisible={isDobModalVisible} onClose={closeModal}> */}
              {/* <DateTimePicker
                value={new Date()}
                onChange={onDateChange}
                mode="date"
              /> */}
              {/* <DatePicker
                style={{ width: 200 }}
                date={dobText}
                mode="date"
                placeholder="Select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={setDobText}
              /> */}
              {/* <Text>Selected Date: {date.toLocaleString()}</Text>
            </ModalComponent> */}

            <ModalComponent isVisible={isEmailModalVisible} onClose={closeModal}>
              <TextInput
                style={styles.modalTextInput}
                multiline
                placeholder="Enter your new email"
                value={emailText}
                onChangeText={setEmailText}
              />
            </ModalComponent>

            <TouchableOpacity onPress={handleLogout} style={[styles.logoutButton]}>
              {/* Logout button */}
              <SvgXml xml={logoutIcon} />
              <Text style={styles.logoutButtonText}>LOGOUT</Text>
            </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
};

export default Profile;
