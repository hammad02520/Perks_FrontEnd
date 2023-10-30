import React, { useState } from 'react';
import {View, Text, TextInput, CommonActions, StyleSheet, Image, Modal, TouchableOpacity, Alert} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { logoSvgCode, profilepic, editicon, profileicon, phonecallicon, bookicon, calendericon, mailicon, globeicon, logoutIcon, HelpIcon } from '../svgData/svgData'; // Import the SVG data
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import styles from '../screenstyles/profileStyles';
import CheckBox from "expo-checkbox";
import DateTimePicker from './../node_modules/@react-native-community/datetimepicker/src/datetimepicker';
import {usePerksContext} from "../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ModalComponent = ({ isVisible, onClose, children }) => (
  <Modal visible={isVisible} transparent={true} animationType="fade">
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
    const [agreeFemale, setAgreeFemale] = useState(false); 
    const [agreeMale, setAgreeMale] = useState(false); 
    const {currentUser} = usePerksContext();
    const [pickedImage, setPickedImage] = useState();
    const [isAboutUsModalVisible, setAboutUsModalVisible] = useState(false);

    const openAboutUsModal = () => {
      setAboutUsModalVisible(true);
    };
  
    const closeAboutUsModal = () => {
      setAboutUsModalVisible(false);
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
      <View style={styles.infocontainer}>
            {/* Your profile content goes here */}
            <View style={styles.profileTextAndEditIcon}>
              <Text style={styles.titleText}>Profile Page</Text>
              <TouchableOpacity onPress={() => {
                    navigation.navigate("EditProfile");
                  }}>
                  <SvgXml xml={editicon} style={styles.editIcon} />
              </TouchableOpacity>
            </View>

            {/* Rectangle containers */}
            <View style={styles.rectangleContainer}>
                <SvgXml xml={profileicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>{currentUser?.fname} {currentUser?.lname}</Text>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={phonecallicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>{currentUser.phone_number}</Text>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={profileicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Gender</Text>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={calendericon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Date of birth</Text>
            </View>
            <View style={[styles.rectangleContainer]}>
                <SvgXml xml={mailicon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Email</Text>
            </View>
            
            <TouchableOpacity onPress={openAboutUsModal}>
              <View style={[styles.Helpdesk]}>
                <SvgXml xml={HelpIcon} style={styles.profileIcon} />
                <Text style={styles.profileTextCenter}>Help Desk</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={[styles.logoutButton]}>
              {/* Logout button */}
              <SvgXml xml={logoutIcon} />
              <Text style={styles.logoutButtonText}>LOGOUT</Text>
            </TouchableOpacity>
      </View>
      <ModalComponent isVisible={isAboutUsModalVisible} onClose={closeAboutUsModal}>
        <Text style={styles.modalTitle}>Hassan Liana</Text>
        <Text style={styles.modalText}>+255785679111</Text>
        <Text style={styles.modalTitle}>Anen Isaac</Text>
        <Text style={styles.modalText}>+255763860354</Text>
        {/* You can add any content you want for the About Us modal */}
      </ModalComponent>

    </SafeAreaView>

  );
};

export default Profile;
