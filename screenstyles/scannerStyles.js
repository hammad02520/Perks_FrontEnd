import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    background: {
      backgroundColor: 'white',
      width: '80%', // Adjust the width of the white background (camera)
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      position: 'relative',
    },
    statusText: {
      fontSize: 18,
    },
    overlay: {
      width: '100%',
      height: '40%',
      alignItems: 'center',
      paddingTop: '15%',
      paddingHorizontal: 30,
      backgroundColor: 'white',
      ...StyleSheet.absoluteFillObject,
    },
    scanText: {
      fontSize: 30,
      fontWeight: '500',
      marginBottom: 20,
    },
    explanationText: {
      fontSize: 14,
      fontWeight: '400',
      marginHorizontal: 10,
      textAlign: 'center',
    },
    header: {
      backgroundColor: "#DBF3FA",
      alignItems: "center",
      paddingHorizontal: 60,
      paddingVertical: 20,
      marginTop: 40,
      borderRadius: 10,
    },
    barcodeScanner: {
      width: '100%',
      height: '100%',
    },
  });

export default styles;