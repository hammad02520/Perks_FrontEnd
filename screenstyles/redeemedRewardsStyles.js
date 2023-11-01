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
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  borderradiusforimage:{
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
  codestyles: {
    color: 'green',
    fontWeight: 'bold',
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
  noRewardsText: {
    marginTop: '40%',
    fontSize: 18,
    width: '90%',
    textAlign: 'center',
    paddingHorizontal: 15,
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
  rectangleAndroidRedeemed: {
    backgroundColor: 'red',
  },
  rectangleIOSRedeemed: {
    backgroundColor: 'red',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: '1%',
  },
  additionalText: {
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#02113F',
    justifyContent: 'center',
    top: 5,
  },
  modalimage:{
    width: 130,
    height: 130,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  outlinedTextContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  modalTextTitle: {
    fontSize: 25,
    color: 'gold',
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    marginTop: 10,
  },
  overlay: {
    color: '#808080',
    top: 2,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
    marginHorizontal: 10,
    fontWeight: '400',
  },
  modalnumber: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: 'green',
    paddingHorizontal: 40,
    paddingVertical: 8,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
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
  loadingContainer: {
    marginBottom: 20,
  },
  borderradiusforimage:{
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
  getAndRedeemButton: {
    backgroundColor: '#02113F',
    borderRadius: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  getAndRedeemReward: {
      fontSize: 13,
      color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: '10%',
    marginBottom: '5%',
  },
  description: {
    fontSize: 13,
  },
});

export default styles;
