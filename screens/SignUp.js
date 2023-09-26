import React, { useState, useEffect } from 'react';
import {
  View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode } from './Welcome';
import globalStyles from '../styles';
import supabase from '../api/supabaseClient';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../screenstyles/signupStyles';

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
  
      const { user, session, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
          },
        },
    });
  
      if (error) {
        console.error('Sign-up error:', error.message);
        throw error;
      }
  
      navigation.navigate('Login');
    } catch (err) {
      console.error('Handle signup error:', err.message);
      Alert.alert('Error', 'An error occurred while signing up.');
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
          placeholder="Phone number"
          keyboardType="phone-pad"
          value={phoneNumber}  // Value is set to phoneNumber state
          onChangeText={setPhoneNumber}  // Updates phoneNumber state
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={[styles.input]}
        />

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Password"
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


  
