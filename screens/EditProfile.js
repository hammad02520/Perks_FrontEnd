import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode, profilepic, editicon, profileicon, phonecallicon, bookicon, calendericon, mailicon, globeicon, logoutIcon } from '../svgData/svgData';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../screenstyles/editProfileStyles';
import { usePerksContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
    const [image, setImage] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState(new Date());
    const [email, setEmail] = useState('');

    const handleSave = () => {
        // Implement your save logic here
        // You can use the state variables (image, firstName, lastName, etc.) to save the user's input
        // For example, you can use AsyncStorage or make an API call to save the data
        // Don't forget to add validation and error handling
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Your profile content goes here */}
                <Text style={styles.titleText}>Edit Profile</Text>

                <View style={styles.imagepicker}>
                    <TouchableOpacity onPress={() => {
                        pickImage().then(r => {
                            console.log("------")})
                    }} style={styles.chooseImage}>
                            <SvgXml xml={profilepic} style={styles.profile} />
                    </TouchableOpacity>
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
