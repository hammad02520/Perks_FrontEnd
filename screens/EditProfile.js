import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode, profilepic, editicon, profileicon, phonecallicon, bookicon, calendericon, mailicon, globeicon, logoutIcon } from '../svgData/svgData';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../screenstyles/editProfileStyles';
import { usePerksContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar} from "@rneui/themed";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";

const EditProfile = ({navigation}) => {
    const [pickedImage, setpickedImage] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState(new Date());
    const [email, setEmail] = useState('');
    const [isLoadind, setIsLoadind] = useState()


    const getPermissionAsync = async () => {
        const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status);

        if (status.status !== "granted") {
            Alert.alert(
                "Insufficient permissions!",
                "You need to grant camera permissions to use this app.",
                [{ text: "Okay" }]
            );
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await getPermissionAsync();
        console.log(hasPermission);
        if (!hasPermission) {
            return;
        }
        // const image = await ImagePicker.launchImageLibraryAsync();
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        // Explore the result

        if (!result.canceled) {
            setpickedImage(result.assets[0].uri);
            props.onImageTaken(result.assets[0].uri);
        }
    };


    const handleSave = async () => {
        try {
            setIsLoadind(true);
            const response = await axios.post(`${BaseUrl}/api/auth/update-user`, {
                email: email,
                fname: firstName,
                lname: lastName,
                phone_number: phoneNumber,
                username: firstName,
                profile:pickedImage
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "X-CSRFToken": "{{ csrf_token }}"
                }
            });

            if (response.data.save === true) {
                navigation.navigate('Home');
            } else {
                console.error('Sign-up error:', response.data.errors);
                Alert.alert('Sign-up Error', 'An error occurred while signing up.');
            }
        } catch (err) {
            if (err.response) {
                // Handle HTTP errors (e.g., 4xx, 5xx)
                console.error('HTTP Error:', err.response.status, err.response.data);
                Alert.alert('HTTP Error', 'An error occurred while making the request.');
            } else if (err.message) {
                // Handle network or request errors
                console.error('Network Error:', err.message);
                Alert.alert('Network Error', 'An error occurred while making the request.');
            } else {
                console.error('Unknown Error:', err);
                Alert.alert('Unknown Error', 'An unknown error occurred.');
            }
        } finally {
            setIsLoadind(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Your profile content goes here */}
                <Text style={styles.titleText}>Edit Profile</Text>

                <View style={styles.imagepicker}>
                    {pickedImage ? ( <TouchableOpacity onPress={() => {
                            takeImageHandler().then(r => {
                                console.log("------")})
                        }} style={styles.chooseImage}><Avatar
                        size={72}
                        rounded
                        source={{uri:pickedImage}}
                        on
                    />
                    </TouchableOpacity> ): (<TouchableOpacity onPress={() => {
                        takeImageHandler().then(r => {
                            console.log("------")})
                    }} style={styles.chooseImage}>
                        <SvgXml xml={profilepic} style={styles.profile} />
                    </TouchableOpacity>)}
                    <View style={styles.imagepickertextcontianer}>
                        <Text style={styles.imagepickertext}>Photo Upload +</Text>
                    </View>
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="First Name: John"
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Last Name: Doe"
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number: 255*********"
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Gender: M"
                        value={gender}
                        onChangeText={(text) => setGender(text)}
                    />

                    {/* Date of Birth */}
                    {/* <DateTimePicker
                        value={dob}
                        mode="date"
                        onChange={(event, selectedDate) => setDob(selectedDate)}
                    /> */}

                    <TextInput
                        style={styles.input}
                        placeholder="Email: JohnDoe@gmail.com"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default EditProfile;
