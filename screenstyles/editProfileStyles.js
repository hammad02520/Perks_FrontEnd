import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    paddingLeft: '2%',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#132D7B',
    alignSelf: 'center',
    marginTop: '25%',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  imagepicker: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 35,
    width: '80%',
  },
  chooseImage: {
    borderRadius: 50,
  },
  imagepickertextcontianer: {
    alignSelf: 'center',
  },
  imagepickertext: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 20,
  },
  inputcontainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: '80%',
  },
  inputcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 15,
    borderWidth: 1,
    width: '100%',
    height: 50,
    paddingStart: 15,
    borderRadius: 15,
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    marginBottom: 15,
    borderWidth: 1,
    width: '48%',
    height: 50,
    paddingStart: 15,
    borderRadius: 15,
  },
  saveButton: {
    backgroundColor: 'lightblue',
    paddingHorizontal: "25%",
    paddingVertical: '3%',
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '30%',
  },
  saveButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
