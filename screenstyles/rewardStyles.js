import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const commonRectangleStyles = {
    width: windowWidth * 0.9,
    height: 80,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  };

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
    },
    noRewardsText: {
      marginTop: '40%',
      fontSize: 18,
      width: '90%',
      textAlign: 'center',
    },
    rectangleAndroid: {
      ...commonRectangleStyles,
      elevation: 5,
    },
    rectangleIOS: {
      ...commonRectangleStyles,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    additionalText: {
      fontSize: 14,
    },
    // Modal styles
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalText: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Arrange buttons side by side
    },
    modalButton: {
      backgroundColor: '#D62828',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginRight: 30,
    },
    modalButton2: {
      backgroundColor: 'green',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    modalButtonText: {
      fontSize: 16,
      fontWeight: '500',
    },

    recommendButton: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "65%",
      height: "4.5%",
      backgroundColor: "#1A6F9E",
      borderRadius: 10,
      marginTop: "7%",
    },
    recommendText: {
      color: "white",
      fontSize: 13,
    },
  });

export default styles;
