import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { logoSvgCode } from './Welcome'; // Adjust the path to match your file structure
import globalStyles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import supabase from '../api/supabaseClient';
import styles from '../screenstyles/loginStyles';


export default function Login(){  
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    // const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = async () => {
        setIsLoading(true);
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (loginError) {
            // Handle the login error accordingly
            alert(loginError.message);
            setIsLoading(false);
            return;
        } 
        if (loginData && loginData.user) {
            const { data: userData, error: selectError } = await supabase
                .from('profiles')
                .select('first_name, last_name, phone_number')
                .eq('id', loginData.user.id)
                .single();

            setIsLoading(false);
    
            if (selectError) {
                // Handle the error when fetching user details
                alert(selectError.message);
                return;
            }
            
            if (userData) {
                // Navigate to the Home and Profile screen with the first name, last name and email of the user
                navigation.navigate('MainScreens', { screen: 'Profile', params: {firstName: userData.first_name, lastName: userData.last_name, email: email, phoneNumber: userData.phone_number },}, );
                navigation.navigate('MainScreens', { screen: 'Home', params: {firstName: userData.first_name, lastName: userData.last_name, user_id: userData.id },}, );
            }
        } else {
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
                    placeholder="Email"
                    keyboardType="email-address" 
                    value={email}
                    onChangeText={setEmail} 
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

                <Text style={styles.forgotPwordText}>Forgot Password?</Text>
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
