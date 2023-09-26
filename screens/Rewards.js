import React, { useState } from 'react';
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

const windowWidth = Dimensions.get('window').width;

const Colors = {
  primary: 'blue',
  danger: '#D62828',
  success: 'green',
};
const initialItems = [
  { title: "Free burger", description: "You only spent 3,000 points", redeemed: false },
  { title: "Free shawarma", description: "You only spent 2,800 points", redeemed: false },
  { title: "Free soda", description: "You only spent 1,000 points", redeemed: false },
  { title: "Free ice cream", description: "You only spent 1,200 points", redeemed: false },
  { title: "Free fries", description: "You only spent 800 points", redeemed: false },
  { title: "Free salad", description: "You only spent 900 points", redeemed: false },
];

const RewardItem = ({ item, onPress }) => {
  const containerStyle = Platform.OS === 'ios' ? styles.rectangleIOS : styles.rectangleAndroid;
  const backgroundColor = item.redeemed ? 'rgba(169, 169, 169, 0.5)' : 'white';

  const getImageSource = () => {
    switch (item.title) {
      case 'Free burger':
        return require('../assets/images/burger2.png');
      case 'Free shawarma':
        return require('../assets/images/shawarma2.png');
      case 'Free soda':
        return require('../assets/images/soda.png');
      case 'Free ice cream':
        return require('../assets/images/icecream.png');
      case 'Free fries':
        return require('../assets/images/fries.png');
      case 'Free salad':
        return require('../assets/images/salad.png');
      default:
        return require('../assets/images/soda.png');
    }
  };  

  return (
    <View key={item.title} style={[containerStyle, { width: windowWidth * 0.9, backgroundColor }]}>
      <View style={globalStyles.borderradiusforimage}>
        <Image source={getImageSource()} style={globalStyles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.additionalText}>{item.description}</Text>
      </View>
      {!item.redeemed && (
        <TouchableOpacity style={globalStyles.getAndRedeemButton} onPress={() => onPress(item)}>
          <Text style={globalStyles.getAndRedeemReward}>Redeem</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Rewards = () => {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState(initialItems);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleRedeemPress = (item) => {
    setShowModal(true);
    setItemToRemove(item);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    if (itemToRemove !== null) {
      // Filter out the redeemed item
      const updatedItems = items.filter((item) => item !== itemToRemove);
  
      // An alert message displaying the one-time reward code
      Alert.alert('This code will disappear once you press OK', 'Your code is 123456', [
        {
          text: 'OK',
          onPress: () => {
            // Update the state to remove the redeemed item
            setItems(updatedItems);
            setItemToRemove(null);
            handleCloseModal();
          },
        },
      ]);
    }
  };
  

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <Text style={globalStyles.title}>Redeem Rewards</Text>
      {items.length === 0 ? (
        <Text style={styles.noRewardsText}>You are out of rewards. Get new rewards from your preferred restaurant. </Text>
      ) : (
        items.map((item) => (
          <RewardItem key={item.title} item={item} onPress={handleRedeemPress} />
        ))
      )}
      <Modal visible={showModal} animationType="slide" transparent={true}>
        {/* ... (unchanged modal code) */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You will be provided with a special code that will only appear once.</Text>
            <Text style={styles.modalText}>Are you sure you want to redeem this?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
              <View style={{ width: 10 }} />
              <TouchableOpacity style={styles.modalButton2} onPress={handleConfirmPurchase}>
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
