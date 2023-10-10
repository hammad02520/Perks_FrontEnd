import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';
import styles from '../screenstyles/welcomeStyles';
import {usePerksContext} from "../context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const logoSvgCode = `
  <svg width="83" height="135" viewBox="0 0 83 135" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5522 82.9175C64.4493 82.8659 82.9691 64.2624 82.9175 41.3654C82.8659 18.4684 64.2624 -0.0514928 41.3654 0.000107566C18.6527 0.0512924 0.247033 18.3569 0.00247192 41H9.07258C9.14928 23.3865 23.4314 9.11196 41.072 9.0722C58.7849 9.03229 73.1763 23.359 73.2163 41.0719C73.2562 58.7847 58.9294 73.1762 41.2166 73.2161C41.1443 73.2163 41.0721 73.2162 41 73.2159V82.9152C41.1838 82.9171 41.3679 82.9179 41.5522 82.9175ZM41 66.9175C41.0058 66.9175 41.0116 66.9175 41.0174 66.9174C55.354 66.8851 66.9499 55.2368 66.9176 40.9002C66.8853 26.5636 55.237 14.9677 40.9004 15C26.5695 15.0323 14.9771 26.6713 15.0001 41H20.6819C20.6812 40.9357 20.6807 40.8714 20.6806 40.8069C20.6556 29.7163 29.6261 20.7053 40.7167 20.6803C51.8073 20.6553 60.8183 29.6258 60.8433 40.7164C60.8682 51.7427 52.0016 60.7135 41 60.8417V66.9175Z" fill="#0C37B9"/>
    <rect y="61" width="41" height="6" fill="#0C37B9"/>
    <rect y="41" width="9" height="94" fill="#0C37B9"/>
    <rect x="15" y="41" width="5.62" height="70" fill="#0C37B9"/>
  </svg>
`;

const WelcomePage = (props) => {
    const [token, setToken] = useState();
    const navigation = useNavigation();
    const {setCurrentUser} = usePerksContext()

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('user');
            const  token = await  AsyncStorage.getItem("authToken")

            // if (!userData) {
            //     props.navigation.navigate('Login');
            //     return;
            // }
            if (token){
                setToken(token)
                const transformedData = JSON.parse(userData);
                setCurrentUser(transformedData)

                props.navigation.navigate('MainScreens');
            }

        };

        tryLogin()

    }, [token]);
  return (

    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <View style={styles.christmas}>
        <Image style={styles.christmasImage} source={require('../assets/images/christmas.png')} />

        <View style={styles.circleContainer}>
          <SvgXml xml={logoSvgCode} width="100%" height="100%" />
        </View>
      </View>
      <Text style={styles.title}>
        Perks
      </Text>
      <Text style={styles.paragraph}>
        A platform built to help you earn your money back.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.touchableButton}
          onPress={() => {
              if (token){
                  navigation.navigate('MainScreens', {screen: 'Profile'});
              }else {
                  navigation.navigate('Login');
              }
          }}
        >
          <Text style={styles.buttonText}>Get started for free    &gt; </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
