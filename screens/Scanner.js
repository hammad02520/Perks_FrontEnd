import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import styles from '../screenstyles/scannerStyles';

export default function App() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

const handleBarCodeScanned = async ({ type, data }) => {
  setScanned(true);

  // Check if there's a logged-in user
  const { user } = supabase.auth.session();

  if (!user) {
    alert('Please log in to record transactions.');
    return;
  }

  // Parse the QR data based on the provided format
  const parsedData = {};
  data.split('\n').forEach(item => {
    const [key, value] = item.split(': ').map(str => str.trim());
    parsedData[key] = value;
  });
  console.log(parsedData);

  const transactionId = uuidv4(); // Generate a unique UUID
  const currentTimestamp = new Date().toISOString();
  try {
    const { error } = await supabase
      .from('transactions')
      .insert({
        transaction_id: transactionId, // Use the generated UUID
        vendor_id: parsedData["VendorID"],
        amount_tier: parsedData["Amount_Tier"],
        points: parseInt(parsedData["Points"], 10),
        transaction_date: currentTimestamp,
        user_id: user.id, // Associate the transaction with the logged-in user
      });

    if (error) {
      console.error('Supabase Error:', error); // Log the error
      alert(`Failed to save transaction data: ${error.message}`);
    } else {
      // Fetch the vendor's name based on the VendorID
      const { data: vendorData, error: vendorError } = await supabase
        .from('vendors')
        .select('vendor_name')
        .eq('vendor_id', parsedData["VendorID"])
        .single();

      if (vendorError || !vendorData) {
        alert('Thank you for scanning! Your transaction has been recorded successfully. However, we couldn\'t fetch the vendor name.');
      } else {
        // Provide a thank you message to the user with the vendor's name
        const message = `Congratulations! You just earned ${parsedData["Points"]} points at ${vendorData.vendor_name}.`;
        alert(message, [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the 'Vendor' page
              navigation.navigate('Vendor');
            },
          },
        ]);
      }
    }
  } catch (err) {
    alert('An error occurred:', err.message);
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