import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
} from "react-native";
import { profile } from "../svgData/svgData";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import supabase from "../api/supabaseClient";
import * as Location from "expo-location";
import styles from "../screenstyles/homeStyles"; // Import styles from the separate file
import { ScrollView } from "react-native-gesture-handler";
import {usePerksContext} from "../context";

export default function Home(props) {
  const navigation = useNavigation();
  const [vendorData, setVendorData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [recommendationText, setRecommendationText] = useState("");
  const [locationText, setLocationText] = useState("Your location");
  const [userLocation, setUserLocation] = useState(null);
  const { firstName, lastName, userId } = props.route.params;
  const {currentUser} = usePerksContext()

  console.log(currentUser)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    // Reset locationText when the modal is closed
    if (!isModalVisible) {
      setLocationText("");
    }
  };

  const submitRecommendation = () => {
    // Handle the submission of recommendationText here
    // You can send it to a backend or perform other actions
    toggleModal();
  };

  const determineGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  };

  useEffect(() => {
    determineGreeting(); // Call determineGreeting when the component mounts
  }, []);
  const [greeting, setGreeting] = useState("");

  const requestLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync(); // Request location permission
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);

        // to show the coordinates:
        // setLocationText(`I recommend a restaurant near: ${location.coords.latitude}, ${location.coords.longitude}`);

        setLocationText(
          `We have received the restaurant's location information and will proceed to work on it. Thank you.`
        );
      } else {
        console.log("Location permission denied");
      }
    } catch (error) {
      console.error("Error requesting location permission:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCard}>
        <ImageBackground
          style={styles.topCardBackground}
          source={require("../assets/images/darkBlueBackground.png")}
        >
          <View style={styles.greetingText}>
            <Text style={styles.hiText}>
              {greeting}, {firstName} {lastName}
            </Text>
          </View>
          {/* <TouchableOpacity
                        style={styles.profileIconContainer}
                        onPress={() => {
                            navigation.navigate('Profile'); // Navigate to the Profile screen
                        }}
                        >
                        <SvgXml xml={profile} style={styles.logoImage} />
                    </TouchableOpacity> */}
          <Text style={styles.totalPoints}>1500</Text>
          <Text style={styles.totalPointsText}> Total Perks Points </Text>
        </ImageBackground>
      </View>

      {/* User's restaurants */}
      <View style={styles.title}>
        <Text style={styles.titleText}>Your Restaurants</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Vendors");
          }}
        >
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.specialAlign}>
        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerShawarma}>
            <Image
              resizeMode="contain"
              style={styles.shawarmaImg}
              source={require("../assets/images/shawarma.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Shawarma 27</Text>
              <Text style={styles.pointsCard}>points: 100</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerShishi}>
            <Image
              resizeMode="contain"
              style={styles.shishiImg}
              source={require("../assets/images/shishi.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Shishi</Text>
              <Text style={styles.pointsCard}>points: 200</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerCrave}>
            <Image
              resizeMode="contain"
              style={styles.craveImg}
              source={require("../assets/images/crave.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Crave</Text>
              <Text style={styles.pointsCard}>points: 0</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* All restaurants in our system */}
      <View style={styles.title}>
        <Text style={styles.titleText}>All Restaurants</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AllRestaurants");
          }}
        >
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.specialAlign}>
        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerCrave}>
            <Image
              resizeMode="contain"
              style={styles.craveImg}
              source={require("../assets/images/crave.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Crave</Text>
              <Text style={styles.pointsCard}>points: 0</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerShawarma}>
            <Image
              resizeMode="contain"
              style={styles.shawarmaImg}
              source={require("../assets/images/shawarma.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Shawarma 27</Text>
              <Text style={styles.pointsCard}>points: 100</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openButton}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("SpecificVendorStack", {
              screen: "SpecificVendor",
            });
          }}
        >
          <View style={styles.cardContainerShishi}>
            <Image
              resizeMode="contain"
              style={styles.shishiImg}
              source={require("../assets/images/shishi.jpg")}
            />
            <View>
              <Text style={styles.restaurantname}>Shishi</Text>
              <Text style={styles.pointsCard}>points: 200</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* for the restaurant recommendations */}
      <TouchableOpacity style={styles.recommendButton} onPress={toggleModal}>
        <Text style={styles.recommendText}>Add Recommendation</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter restaurant name</Text>
            <TextInput
              style={styles.modalTextInput}
              multiline
              placeholder="Enter your recommendation..."
              value={recommendationText}
              onChangeText={setRecommendationText}
            />
            <Text style={styles.modalTitle}>OR</Text>
            <View style={styles.locationContainer}>
              <TouchableOpacity
                style={styles.locationButton}
                onPress={requestLocationPermission} // Request location permission
              >
                <Icon name={"map-marker"} color={"white"} size={20} />
                <Text style={styles.recommendHereText}>Recommend Here</Text>
              </TouchableOpacity>
              <Text style={styles.coordinates}>{locationText}</Text>
            </View>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
