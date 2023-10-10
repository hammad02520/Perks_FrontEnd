import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
  Alert,
  VirtualizedList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../styles';
import styles from '../screenstyles/rewardStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";
import {usePerksContext} from "../context";
import {useNavigation} from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;

const RewardItem = ({ item, currentrdId, onPress }) => {
  const containerStyle = Platform.OS === 'ios' ? styles.rectangleIOS : styles.rectangleAndroid;
  const backgroundColor = currentrdId === item?.id  ? 'rgba(169, 169, 169, 0.5)' : 'white';

  return (
      <View key={item.title} style={[
        containerStyle,
        {
          width: windowWidth * 0.9,
          backgroundColor
        },
      ]}>
        <View style={globalStyles.borderradiusforimage}>
          <Image source={{uri:item?.image}} style={globalStyles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.count} {item.name}</Text>
          <Text style={styles.additionalText}>You only spent {item.points} points</Text>
          <Text style={styles.additionalText}>{item.restaurant.rst_name}</Text>
        </View>

            <TouchableOpacity style={globalStyles.getAndRedeemButton} onPress={() => onPress(item)}>
              <Text style={globalStyles.getAndRedeemReward}>Redeem</Text>
            </TouchableOpacity>

      </View>
  );
};
const Rewards = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [itemsToRedeem, setItemsToRedeem] = useState([]);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [loadingRedeem, setLoadingRedeem] = useState(false);
  const [redeemedRewards, setRedeemedRewards] = useState();
  const {currentUser, setCurrentRedeemedRewardId, currentRedeemedRewardId} = usePerksContext()
  const [selectedItem, setSelectedItem] = useState();

  async function loadData() {
    const rewards_to_redeem = await AsyncStorage.getItem('rewards_to_redeem');
    try {
      const user_redeemed_rewards = await axios.get(
          `${BaseUrl}/api/generate_rewards?querytype=user_redeemed_rewards&user=${currentUser.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );
      setRedeemedRewards(user_redeemed_rewards.data)
    }catch (e) {

    }

    if(rewards_to_redeem){
      setItemsToRedeem(JSON.parse(rewards_to_redeem))
    }
  }

  useEffect(() => {
    loadData()
  }, [itemsToRedeem, currentRedeemedRewardId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRedeemedRewardId(' ');
    }, 60000);

    return () => clearTimeout(timer);
  }, []);


  const handleRedeemPress = async (item) => {
    setLoadingRedeem(true);
    console.log(item)
    try {
      const awardsData = await axios.get(
          `${BaseUrl}/api/generate_rewards?querytype=award&award=${item?.id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );

      if(awardsData?.data.length > 0){
        const availableRewards =await awardsData.data?.filter((data) => data?.code_used_state !== true)
        if (availableRewards.length > 0){
          const count = availableRewards.length;
          const randomIndex = Math.floor(Math.random() * count);
          const awardChosen = availableRewards[randomIndex];

          const response = await axios.get(
              `${BaseUrl}/api/generate_rewards?querytype=use_award&id=${awardChosen?.id}&user=${currentUser.id}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
          );

          if (response?.data.success){
            const found_item = itemsToRedeem.find((item) => item.id === item.id);
            console.log(found_item)
            if (found_item.count > 1){
              const index = itemsToRedeem.indexOf(found_item);
              itemsToRedeem[index].count -= 1;
              await AsyncStorage.setItem('rewards_to_redeem', JSON.stringify(itemsToRedeem));
            }else {
              const rewards_to_redeem_after_removal = itemsToRedeem.filter((itemrd) => itemrd.id !== item.id);
              await AsyncStorage.setItem('rewards_to_redeem', JSON.stringify(rewards_to_redeem_after_removal));
            }

            loadData();
            Alert.alert('This code will disappear once you press OK', `Your code is ${response?.data?.award_code}`, [
              {
                text: 'OK',
                onPress: () => {
                  // Update the state to remove the redeemed item
                  // setItems(updatedItems);
                  setItemToRemove(null);
                  handleCloseModal();
                },
              },
            ]);
            setLoadingRedeem(false);
          }else {
            alert("Something went wrong try again later!")
          }
        }else {
          alert("Sadly your order is not available yet!!!")
        }
      }else {
        alert("Sadly your order is not available yet!!!")
      }
    }catch (e) {
      alert(`Error ${e.message}`)
      setLoadingRedeem(false);
    }
    setItemToRemove(item);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = (item) => {
    setShowModal(true);

   setSelectedItem(item)
  };






  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <Text style={globalStyles.title}>Redeem Rewards</Text>
      {itemsToRedeem.length === 0 ? (
        <Text style={styles.noRewardsText}>You are out of rewards. Get new rewards from your preferred restaurant. </Text>
      ) : (
          itemsToRedeem.map((item,index) => (
          <RewardItem key={`${item.id}-${index}`} item={item} currentrdId={currentRedeemedRewardId} onPress={handleConfirmPurchase}/>
        ))
      )}
      <TouchableOpacity style={styles.recommendButton} onPress={() => {navigation.navigate('RedeemedRewards');}}>
        <Text style={styles.recommendText}>Your last 5 redeemed rewards</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        {/* ... (unchanged modal code) */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You will be provided with a special code that will only appear once.</Text>
            {loadingRedeem? <Text style={styles.modalText}>Loading...</Text>: <Text style={styles.modalText}>Are you sure you want to redeem this?</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <View style={{ width: 10 }} />
              <TouchableOpacity style={styles.modalButton2} onPress={ () => handleRedeemPress(selectedItem)}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Rewards;
