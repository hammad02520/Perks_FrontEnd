import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { logoSvgCode } from './Welcome'; // Adjust the path to match your file structure
import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles';
import styles from '../screenstyles/specificVendorStyles';
import ProgressBar from 'react-native-progress/Bar'; // Import the ProgressBar component
import { ScrollView } from 'react-native-gesture-handler';
import {usePerksContext} from "../context";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";

const RewardCard = ({ title, points, imageSource }) => {
  const handleGetReward = () => {
    // Show an alert when the "GET" button is pressed
    Alert.alert(
      'Reward Purchased',
      'You just purchased this product. Now go to the redeem page.',
      [
        {
          text: 'OK',
          onPress: () => {
            // The user has acknowledged the alert
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={globalStyles.rewardContainer}>
      <Image style={globalStyles.rewardImg} source={imageSource} />
      <View style={globalStyles.rewardInfo}>
        <Text style={globalStyles.rewardCard}>{title}</Text>
        <Text style={globalStyles.pointsCard}>Points: {points}</Text>
      </View>
      <TouchableOpacity style={globalStyles.getAndRedeemButton} onPress={handleGetReward}>
        <Text style={globalStyles.getAndRedeemReward}>Get</Text>
      </TouchableOpacity>
    </View>
  );
};

const Vendor = (props) => {
  const navigation = useNavigation();
    const {currentUser} = usePerksContext();
    const [userResturantData, setUserResturantData] = useState();
    const {restraurant, total_points_earned, restId} = props.route.params;

    useEffect(() => {
        async function userRstDataLoad (){
            const response = await axios.get(
                `${BaseUrl}api/user-restraurant?userId=${currentUser.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const restaurants = response.data
            console.log(restId)

            const data = restaurants.find((rst) => rst.restraurant.id === restId);
            console.log(data)
            setUserResturantData(data)
        }
        userRstDataLoad()
    }, []);

    console.log(userResturantData);

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <SvgXml xml={logoSvgCode} width="5%" height="10%" />

      <View style={globalStyles.card}>
        <ImageBackground style={styles.imagesomething} source={require('../assets/images/darkBlueBackgroundmodified.png')}>
          <View style={globalStyles.contentOfCard}>
            <Text style={globalStyles.restaurantName}>{userResturantData?.restraurant.name}</Text>
            <Text style={globalStyles.points}>{userResturantData?.total_points}pts</Text>
            <Text style={globalStyles.remainingPoints}>1900pts till you can get a free drink</Text>
            <Text style={globalStyles.userName}>Hassan</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={0.5} // Set the progress value here
              width={330}
              color="#FFD700"
              style={styles.progressBar}
            />
          </View>
        </ImageBackground>
      </View>
        <Text style={globalStyles.leftTitle}>Available rewards</Text>
      <ScrollView style={styles.scrollcontainer}>
        <RewardCard title="Free soda" points="1000" imageSource={require('../assets/images/soda.png')} />
        <RewardCard title="Free shawarma" points="2800" imageSource={require('../assets/images/shawarma2.png')} />
        <RewardCard title="Free burger" points="3000" imageSource={require('../assets/images/burger2.png')} />
        <RewardCard title="Free soda" points="1000" imageSource={require('../assets/images/soda.png')} />
        <RewardCard title="Free shawarma" points="2800" imageSource={require('../assets/images/shawarma2.png')} />
        <RewardCard title="Free burger" points="3000" imageSource={require('../assets/images/burger2.png')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vendor;
