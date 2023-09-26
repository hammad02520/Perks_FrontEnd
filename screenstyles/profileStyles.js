import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    // ???????????????????????????????????????
    christmasImage: {
      width: '15%',
      height: '15%',
      paddingTop: 50,
    },
    backgroundContainer: {
      flex: 0.3, // Set to 35% of the container's height
      width: '100%',
      position: 'relative', // Necessary for absolute positioning of child elements
    },
    backgroundImage: {
      width: '100%',
      height: '95%',
      resizeMode: 'cover',
      borderBottomLeftRadius: 20, // Adjust the radius as needed
      borderBottomRightRadius: 20, // Adjust the radius as needed
    },
    logoImage: {
      position: 'absolute',
      top: '25%',
      left: '53%', 
      transform: [{ translateX: -25 }, { translateY: -25 }],
      width: 50, 
      height: 50,
      resizeMode: 'contain',
    },
    profile: {
      position: 'absolute',
      top: '2%',
      left: '6%', 
      width: '100%', 
      height: '100%', 
      resizeMode: 'contain', 
    },
    profile2: {
      alignSelf: 'left',
      right: '30%',
    },
    textContainer: {
      position: 'absolute',
      top: '45%',
      width: '100%', 
      marginLeft: 100,
    },
    profileText: {
      alignItems: 'flex-start',
      marginTop: 20,
    },
    nameText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center', 
      left: '3%',
    },
    emailText: {
      fontSize: 13,
      color: 'white',
      textAlign: 'center', 
      left: '3%',
    },
    titleText: {
      paddingLeft: '2%',
      fontSize: 28,
      fontWeight: 'bold',
      color: '#132D7B',
      marginBottom: '3%',
    },
    rectangleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 12,
      marginTop: 7,
      borderRadius: 10,
      width: '90%',
      alignSelf: 'center',
    },
    profileIcon: { 
      width: 30,
      height: 30,
    },
    profileTextCenter: {
      flex: 1,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      textAlign: 'left',
      left: 10,
    },
    editIcon: {
      width: 30,
      height: 30,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    defaultText: {
      flex: 1,
      fontSize: 16,
      color: 'grey',
      right: 30,
    },
    mt20: {
      marginTop: 5, // Increase the top margin
    },
    trying: {
      flex: 0.7,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      marginBottom: 20,
    },
    modalTextInput: {
      fontSize: 15,
      paddingTop: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
    },
    closeButton: {
      fontSize: 18,
      color: '#132D7B',
      padding: 5,
      borderRadius: 10,
      marginTop: 10,
      alignItems: 'center',
    },
    genderOption: {
      paddingRight: '10%',
      paddingLeft: '5%',
      fontSize: 15,
    },
    genderOptions: {
      width: '100%',
      flexDirection: 'row',
    },
    logoutButton: {
      flexDirection: 'row',
      backgroundColor: '#02113F', // Customize the button's appearance
      marginTop: 50, // Adjust the margin as needed
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      alignSelf: 'center',
      paddingVertical: 10,
      paddingHorizontal: 30,
      width: '50%',
    },
    logoutButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: '500',
      letterSpacing: 1,
    },
  });

export default styles;
