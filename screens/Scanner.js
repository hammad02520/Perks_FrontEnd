import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import styles from '../screenstyles/scannerStyles';
import {usePerksContext} from "../context";
import axios from "axios";
import {BaseUrl} from "../api/BaseUrl";

export default function App(message) {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const {currentUser} = usePerksContext()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      console.log("----------------");
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      console.log(status)
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (scanned) return; // Don't proceed if already scanned
    setScanned(true);

    // Check if there's a logged-in user
    if (!currentUser) {
      alert('Please log in to record transactions.');
      return;
    }

    // Parse the QR data based on the provided format
    const parsedData = {
      coupon_id : data
    };

    try {
      const response = await axios.get(`${BaseUrl}api/coupon?querytype=single&coupon=${data}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data) {
        const message = `Congratulations! You just earned ${response.data?.points} points at ${response.data?.restraurant?.name}.`;
        alert(message, [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the 'Vendor' page only once
              navigation.navigate('Vendor');
            },
          },
        ]);
      }
    } catch (err) {
      alert('An error occurred:', err.message);
    } finally {
      setScanned(false); // Reset scanned state after handling
    }
  };

  if (hasPermission === null) {
    return <Text style={styles.statusText}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.statusText}>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>

      <View style={styles.background}>

        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.barcodeScanner}
        />
      </View>
      <View style={styles.overlay} >
        <View style={styles.header}>
        <Text style={styles.scanText}>Scan QR code</Text>
        <Text style={styles.explanationText}>Scan the Perks QR code to get your exclusive points back.</Text>
        </View>
      </View>
    </View>
  );
}
