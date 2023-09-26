import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    companyName: {
        flexDirection: 'row', // Align cards horizontally
        alignItems: 'flex-end', // Align items to the bottom
        marginTop: 20,
        padding: 15,
        left: 11,
    },
    loader: {
      marginTop: 20,
    },
    logoImg: {
        width: 70,
        height: 50,
    },
    nameText: {
        fontSize: 20,
        top: 6,
        right: 38,
    },
    signUpText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '3%',
        marginBottom: '5%',
    },
    nameStyles: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        marginTop: '3%',
        marginBottom: '3%',
        width: '48%',
        height: 50,
        paddingStart: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    input: {
        marginTop: '3%',
        marginBottom: '3%',
        width: '80%',
        height: 50,
        paddingStart: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    passwordVisibilityIcon: {
        position: 'absolute',
        right: 15,
    },
    loginText: {
        color: 'blue',
    },
    horizontalLine: {
      height: 1,
      width: '90%',
      backgroundColor: 'gray',
      marginVertical: 20,
    },
    footerText: {
        textAlign: 'center',
        color: 'gray',
    },
  });

export default styles;
