import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backgroundContainer: {
    flex: 0.3,
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logoImage: {
    position: 'absolute',
    top: '30%',
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
    resizeMode: 'contain',
  },
  profile2: {
    marginLeft: 15,
    marginRight: 10,  
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  profile3: {
    height: 75,
    width: 75,
    marginHorizontal: 20,  
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,    
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '52%',
    left: '2%',
    width: '100%',
    alignItems: 'center',
  },
  profileText: {
    alignItems: 'flex-start',
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
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: 'underline',
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
    marginTop: 5,
  },
  infocontainer: {
    flex: 0.8,
    width: '100%',
    backgroundColor: 'white',
  },
  profileTextAndEditIcon: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 23,
    marginBottom: 5,
  },
  modalText: {
    marginBottom: 10,
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
  Helpdesk: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 30,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    borderTopWidth: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 0,
    marginLeft: 20,
    borderRadius: 15,
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 350,
  },
  logoutButtonText: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    paddingLeft: 20,
  },
});

export default styles;
