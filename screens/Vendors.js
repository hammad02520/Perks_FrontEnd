import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { logoSvgCode } from './Welcome'; // Adjust the path to match your file structure
import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles';
import styles from '../screenstyles/vendorsStyles';
import { Platform } from 'react-native';
import {usePerksContext} from "../context";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";

const Vendor = (props) => {
  const navigation = useNavigation();
    const [restaurants, setRestaurants] = useState();
    const {currentUser} = usePerksContext();

    useEffect(() => {
        console.log("-------------------------------------------------")
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
                setRestaurants(data)
            }catch (e) {
                alert(`Error ${e.message}`)
            }
        }
        loadRestaurants()
    }, []);


  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>

{/* title depending on whether the user wants to see their restaurants or nearby restaurants */}
      <Text style={styles.titleText} >All your restaurants</Text>
      {/* or 'Restaurants near you' */}
        <ScrollView>
            {restaurants?.length > 0 ? (
                restaurants?.map((item) => {
                    return   <TouchableOpacity
                        key={item?.id}
                        style={styles.openButton}
                        activeOpacity={0.5}
                        onPress={() => {
                            navigation.navigate('SpecificVendorStack', { screen: 'SpecificVendor',
                                params: {
                                    restraurant: item?.restraurant.name,
                                    restId: item?.restraurant.id,
                                }
                            });
                        }}
                    >
                        <Image resizeMode="stretch" style={styles.shawarmaImg} source={{uri:BaseUrl+item?.restraurant?.pic}}/>
                        <View style={styles.restaurantInfo}>
                            <Text style={styles.restaurantname}>{item?.restraurant.name}</Text>
                            <Text style={styles.pointsCard}>points: {item?.total_points}</Text>
                        </View>
                    </TouchableOpacity>
                })
            ) : (
                <Text style={[styles.restaurantname, {color:"black"}]}>No Restaurants</Text>
            )}
        </ScrollView>



{/* restaurants pulled from database depending on request */}
{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.shawarmaImg} source={require('../assets/images/shawarma.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Shawarma 27</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 100</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}

{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.shishiImg} source={require('../assets/images/shishi.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Shishi</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 200</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}

{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.craveImg} source={require('../assets/images/crave.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Crave</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 0</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}

{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.craveImg} source={require('../assets/images/crave.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Crave</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 0</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}
{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.shawarmaImg} source={require('../assets/images/shawarma.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Shawarma 27</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 100</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}

{/*    <TouchableOpacity*/}
{/*        style={styles.openButton}*/}
{/*        activeOpacity={0.5}*/}
{/*        onPress={() => {*/}
{/*            navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor'})*/}
{/*        }}*/}
{/*    >*/}
{/*        <Image resizeMode="stretch" style={styles.shishiImg} source={require('../assets/images/shishi.jpg')}/>*/}
{/*        <View style={styles.restaurantInfo}>*/}
{/*            <Text style={styles.restaurantname}>Shishi</Text>*/}
{/*            <Text style={styles.pointsCard}>points: 200</Text>*/}
{/*        </View>*/}
{/*    </TouchableOpacity>*/}


  </SafeAreaView>
  );
};

export default Vendor;
