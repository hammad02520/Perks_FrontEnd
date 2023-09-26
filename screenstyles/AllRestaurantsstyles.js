import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topPart: {
    height: '25%',
    width: '100%',
    marginTop: 0,
  },
  headerImage: {
    height: '115%',
  },
  overlay: {
    position: 'absolute',
    height: '115%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContent: {
    height: '100%',
    width: '100%',
    },
  searchIcon: {
    alignItems: 'flex-end',
    padding: '5%',
  },
  searchInput: {
    paddingRight: '50%',
  },
  titleText: {
    width: '60%',
    top: '15%',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  closeModalIcon: {
    paddingLeft: '5%',
  },  
  page: {
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'white',
  },
  openButton: {
    height: 80,
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: '2%',
    marginLeft: '5%',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  restaurantImage: {
    width: '30%',
    height: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
  },
  restaurantInfo: {
    paddingStart: '5%',
  },
  restaurantname: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10, // Adjust as needed
    // borderWidth: 3,
},
pointsCard: {
    //   borderWidth: 3,
    fontSize: 15,
    marginTop: 10, // Adjust as needed
  },
});

export default styles;
