import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {Button} from "@rneui/themed";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import styles from '../screenstyles/scannerStyles';
import { usePerksContext } from '../context';
import axios from 'axios';
import { BaseUrl } from '../api/BaseUrl';

export default function App(message) {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { currentUser } = usePerksContext();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (scanned) return; // Only handle the scan once
    setScanned(true);

    if (!currentUser) {
      alert('Please log in to record transactions.');
      setScanned(false); // Allow scanning again after the alert
      return;
    }

    const parsedData = {
      coupon_id: data,
    };

    try {
      const response = await axios.get(
          `${BaseUrl}api/coupon?querytype=single&coupon=${data}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      );
      let points = parseFloat(response.data?.start_amount) / 2000
      console.log(points)

      const pointsRsp =  await  axios.post(
          `${BaseUrl}api/user-restraurant`,
          {
            user: currentUser.id,
            restraurant:response.data?.restraurant.id ,
            total_points: points
          }
      )
      console.log(pointsRsp.data)

      if (pointsRsp.data) {
        navigation.navigate('SpecificVendorStack', {screen: 'SpecificVendor',
          params: {
            restraurant: response.data?.restraurant.name,
            restId: response.data?.restraurant.id,
            total_points_earned: points
          }
        });
        const message = `Congratulations! You just earned ${points} points at ${response.data?.restraurant?.name}.`;
        Alert.alert(message, [
          {
            text: 'OK',
            onPress: () => {
              setScanned(false);
              // Allow scanning again after displaying the message
            },
          },
        ]);

      }
    } catch (err) {
      alert('An error occurred:', err.message);
      setScanned(false); // Allow scanning again after the alert
    }
  };

  if (hasPermission === null) {
    return <Text style={styles.statusText}>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.statusText}>No access to camera</Text>;
  }

  return (
      <View style={styles.container}>
        <View style={styles.background}>

          <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={styles.barcodeScanner}
          />
        </View>


        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.scanText}>Scan QR code</Text>
            <Text style={styles.explanationText}>
              Scan the Perks QR code to get your exclusive points back.
            </Text>
            <Button
                style={{ marginTop: 10, borderRadius:15, padding:1, elevation:3}}
                titleStyle={{ fontWeight:'bold' }}
                title={'Tap to Scan'}
                onPress={() => setScanned(false)}
            />
          </View>
        </View>
      </View>
  );
}
