import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '400',
    marginTop: 70,
  },
  christmas: {
    backgroundColor: '#02113F',
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  christmasImage: {
    width: '70%',
    height: '80%',
    paddingTop: 50,
  },
  paragraph: {
    textAlign: 'center',
    margin: 10,
    fontSize: 18,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 100,
  },
  touchableButton: {
    backgroundColor: '#02113F', 
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#ECE1E1', 
    fontSize: 16,
  },
  circleContainer: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    top: '110%',
    alignSelf: 'center',
    zIndex: 1,
  },
  logoImage: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
