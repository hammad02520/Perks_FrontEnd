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
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    topPart: {
      height: '25%',
      width: '100%',
      marginTop: 0,
    },
    headerImage: {
      height: '100%',
    },
    overlay: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    overlayContent: {
      height: '100%',
      width: '100%',
      },
    titleText: {
      width: '100%',
      top: '35%',
      left: '2%',
      textAlign: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      color: 'white',
    },
    restaurantText: {
      width: '85%',
      fontSize: 22,
      fontWeight: "bold", 
      marginTop: 40,
      marginBottom: 10,
    },
    noRewardsView: {
      width: '100%',
      alignItems: 'center',
      marginBottom: '25%',
    },
    noRewardsText: {
      width: '77%',
      top: '65%',
      marginTop: '15%',
      marginBottom: '10%',
      textAlign: 'center',
      fontSize: 18,
      color: 'grey',
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
    borderRadiusForImage:{
      borderradius: '20%',
      borderWidth: 1,
      borderColor: '#bebebe',
    },
    image: {
      width: 70,
      height: 60,
      resizeMode: 'contain',
      backgroundColor: '#D5FFFF',
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
    redeemButton: {
        backgroundColor: '#02113F',
        borderRadius: 10,
        textAlign: 'center',
      //   padding: 7,
      paddingHorizontal: 15,
      paddingVertical: 5,
        marginLeft: 10,
    },
    redeemReward: {
        fontSize: 13,
        color: 'white',
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 20,
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
