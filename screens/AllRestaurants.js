import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../screenstyles/AllRestaurantsstyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {usePerksContext} from "../context";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";

const AllRestaurants = () => {
  const navigation = useNavigation();
    const [restaurantss, setRestaurantss] = useState();
    const {currentUser} = usePerksContext();

    useEffect(() => {
        async function loadRestaurants() {
        try{
            const response = await axios.get(
                `${BaseUrl}/api/user-restraurant?userId=${currentUser?.id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data
            console.log(data)
            setRestaurantss(data)
        }catch (e) {
            alert(`Error ${e.message}`)
        }
        }

        loadRestaurants();

    }, []);

  const [searchText, setSearchText] = useState('');
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
    // Add more restaurants here with their image sources
  ];

  // Filter restaurants based on the user's input
  const handleOnChangeText = (text) => {
    setSearchText(text);

    const filtered = restaurantss?.filter((restaurant) =>
      restaurant.restraurant.name.toLowerCase().includes(text.toLowerCase())
    );
    setModalFilteredRestaurants(filtered);
  };

  const renderRestaurant = (restaurant) => (
    <TouchableOpacity
      style={styles.openButton}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('SpecificVendorStack', { screen: 'SpecificVendor',
            params: {
                restraurant: restaurant?.restraurant.name,
                restId: restaurant?.restraurant.id,
            }
        });
      }}
      key={restaurant?.id}
    >
      <Image
        resizeMode="contain"
        style={styles.restaurantImage}
        source={restaurant?.restraurant?.pic}
      />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantname}>{restaurant?.restraurant.name}</Text>
        <Text style={styles.pointsCard}>points: {restaurant?.total_points}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topPart}>
            <ImageBackground style={styles.headerImage} source={require('../assets/images/foodbackground.png')}>
            {/* Dark overlay */}
                <View style={styles.overlay} />
                <View style={styles.overlayContent}>
                    <Text style={styles.titleText}>All Restaurants</Text>
                </View>
            </ImageBackground>
            </View>
            <ScrollView style={styles.page}>
              <SearchBar
                placeholder="Search for restaurants..."
                onChangeText={handleOnChangeText}
                value={searchText}
                searchIcon={<Icon name={"search"} size={24} color="#888"/>}
                containerStyle={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0)', borderBottomWidth: 0, borderTopWidth: 0, marginVertical: 10 }}
                inputContainerStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', borderBottomWidth: 1}}
                placeholderTextColor={'#888'}
                inputStyle={{ color: '#333'}}
                // , marginVertical: 100
              />
              {modalFilteredRestaurants.length > 0
                ? modalFilteredRestaurants.map(renderRestaurant)
                : restaurantss?.map(renderRestaurant)}
            </ScrollView>
    </SafeAreaView>
  );
};

export default AllRestaurants;
