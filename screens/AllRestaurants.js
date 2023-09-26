import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles';
import styles from '../screenstyles/AllRestaurantsstyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllRestaurants = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalSearchText, setModalSearchText] = useState('');
  const [modalFilteredRestaurants, setModalFilteredRestaurants] = useState([]);
  
  const restaurants = [
    {
      name: 'Shishi',
      points: 200,
      imageSource: require('../assets/images/shishi.jpg'),
    },
    {
      name: 'Crave',
      points: 0,
      imageSource: require('../assets/images/crave.jpg'),
    },
    {
      name: 'Shawarma 27',
      points: 100,
      imageSource: require('../assets/images/shawarma.jpg'),
    },
    {
      name: 'Shishi1111111111',
      points: 200,
      imageSource: require('../assets/images/shishi.jpg'),
    },
    {
      name: 'Crave1111111111111',
      points: 0,
      imageSource: require('../assets/images/crave.jpg'),
    },
    {
      name: 'Shawarma27',
      points: 100,
      imageSource: require('../assets/images/shawarma.jpg'),
    },
    {
      name: '2222',
      points: 0,
      imageSource: require('../assets/images/crave.jpg'),
    },
    {
      name: '699',
      points: 100,
      imageSource: require('../assets/images/shawarma.jpg'),
    },
    // Add more restaurants here with their image sources
  ];

  const handleModalSearchTextChange = (text) => {
    setModalSearchText(text);
  
    // Filter restaurants based on the user's input
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(text.toLowerCase())
    );
    setModalFilteredRestaurants(filtered);
  };  

  const renderRestaurant = (restaurant) => (
    <TouchableOpacity
      style={styles.openButton}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('SpecificVendorStack', { screen: 'SpecificVendor' });
      }}
      key={restaurant.name}
    >
      <Image
        resizeMode="contain"
        style={styles.restaurantImage}
        source={restaurant.imageSource}
      />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantname}>{restaurant.name}</Text>
        <Text style={styles.pointsCard}>points: {restaurant.points}</Text>
      </View>
    </TouchableOpacity>
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPart}>
            <ImageBackground style={styles.headerImage} source={require('../assets/images/foodbackground.png')}>
            {/* Dark overlay */}
                <View style={styles.overlay} />
                <View style={styles.overlayContent}>
                    <TouchableOpacity onPress={toggleModal} style={styles.searchIcon}>
                        <Icon name={"search"} size={24} color="#fff"/>
                    </TouchableOpacity>
                    <Text style={styles.titleText}>All Restaurants</Text>
                </View>
            </ImageBackground>
            </View>

            <ScrollView style={styles.page}>
                {restaurants.map(renderRestaurant)}
            </ScrollView>

            {/* modal for the search option */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={toggleModal}
                >
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search restaurants"
                        value={modalSearchText}
                        onChangeText={handleModalSearchTextChange}
                    />
                    <TouchableOpacity onPress={toggleModal}>
                        <Icon
                        style={styles.closeModalIcon}
                        name={'times-circle'}
                        size={26}
                        color="black"
                        />
                    </TouchableOpacity>
                    </View>
                    <ScrollView>
                    {modalFilteredRestaurants.map(renderRestaurant)}
                    </ScrollView>
                </View>
            </Modal>
    </SafeAreaView>
  );
};

export default AllRestaurants;
