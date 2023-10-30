import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode } from './Welcome'; // Adjust the path to match your file structure
import globalStyles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import supabase from '../api/supabaseClient';
import styles from '../screenstyles/loginStyles';
import {usePerksContext} from "../context";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login(){
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number
    const [phone_number, setphone_number] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {setCurrentUser} = usePerksContext()


    const handleLogin = async () => {
        setIsLoading(true);
        try {

            const response = await axios.post(`${BaseUrl}/api/auth/login`, {
                    phone_number: phone_number,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }

            });

            console.log(response.data)

            if (response.data?.token) {
                await AsyncStorage.setItem('authToken', response.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
                setCurrentUser(response.data.user);

                navigation.navigate('MainScreens', {
                    screen: 'Home',
                    params: {
                        firstName: response.data.user.firstName,
                        lastName: response.data.user.lastName,
                        userId: response.data.user.id,
                    },
                });
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);

            if (error.response) {
                alert("Server error. Please try again later.");
            } else if (error.request) {
                alert("Network error. Please check your internet connection.");
            } else {
                alert("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
            <View style={globalStyles.container}>

                <View style={styles.companyName}>
                    <View style={styles.logoImg}>
                        <SvgXml xml={logoSvgCode} width="100%" height="120%"/>
                    </View>
                    <Text style={styles.nameText}>erks</Text>
                </View>

                <Text>Earn your money back with us</Text>

                <Text style={styles.loginText}>Login</Text>

                <TextInput
                    placeholder="Phone Number: 255*********"
                    keyboardType="phone-pad"
                    value={phone_number}
                    onChangeText={setphone_number}
                    style={[globalStyles.input, styles.input]} />

                <View style={styles.passwordInputContainer}>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                        style={[globalStyles.input, styles.input]}
                    />
                    <TouchableOpacity
                        style={styles.passwordVisibilityIcon}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Icon
                            name={passwordVisible ? 'eye' : 'eye-slash'}
                            size={24}
                            padding={5}
                            color="#333" // Adjust the color as needed
                        />
                    </TouchableOpacity>
                </View>

                {isLoading ? (
                    <ActivityIndicator size = "large" color = "#0000ff" />
                ) : (

                <TouchableOpacity
                    style={globalStyles.customButton}
                    onPress={handleLogin}
                >
                    <Text style={globalStyles.buttonText}>Login</Text>
                </TouchableOpacity>
                )}

                <Text>Don't have an account yet?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    <View>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </View>

                </TouchableOpacity>

                <View style={styles.horizontalLine}></View>
                <Text style={styles.footerText}>Copyright @ {new Date().getFullYear()} Perks</Text>

            </View>
        </ScrollView>
  )
}
