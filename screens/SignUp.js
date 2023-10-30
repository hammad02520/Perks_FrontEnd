import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode } from './Welcome';
import globalStyles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../screenstyles/signupStyles';
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignUp() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${BaseUrl}/api/auth/register`, {
        email: email,
        password: password,
        fname: firstName,
        lname: lastName,
        phone_number: phoneNumber,
        username: firstName,
      }, {
        headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": "{{ csrf_token }}"
        }
      });

      if (response.data.save === true) {
        navigation.navigate('Login');
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
      setIsLoading(false);
    }
  };


  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <View style={styles.companyName}>
          <View style={styles.logoImg}>
            <SvgXml xml={logoSvgCode} width="100%" height="100%" />
          </View>
          <Text style={styles.nameText}>erks</Text>
        </View>

        <Text>Earn your money back with us</Text>

        <Text style={styles.signUpText}>Sign Up</Text>

        <View style={styles.nameStyles}>
          <TextInput
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.halfInput]}
          />
          <TextInput
            placeholder="Last name"
            value={lastName}
            onChangeText={setLastName}
            style={[styles.halfInput]}
          />
        </View>
        <TextInput
          placeholder="Phone number: 255*********"
          keyboardType="phone-pad"
          value={phoneNumber}  // Value is set to phoneNumber state
          onChangeText={setPhoneNumber}  // Updates phoneNumber state
          style={styles.input}
        />
        <TextInput
          placeholder="Email: JohnDoe@gmail.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={[styles.input]}
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password (minimum 6 characters)"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            style={[styles.input]}
          />
          <TouchableOpacity
            style={styles.passwordVisibilityIcon}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? 'eye' : 'eye-slash'}
              size={24}
              padding={5}
              color="#333"
            />
          </TouchableOpacity>
        </View>

        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        ) : (
        <TouchableOpacity
          style={globalStyles.customButton}
          onPress={handleSignup}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        )}
        <View style={styles.horizontalLine}></View>
        <Text style={styles.footerText}>Copyright @ {new Date().getFullYear()} Perks</Text>

      </View>
    </ScrollView>
  );
}



