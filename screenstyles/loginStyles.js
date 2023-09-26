import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    companyName: {
        flexDirection: 'row', // Align cards horizontally
        alignItems: 'flex-end', // Align items to the bottom
        marginVertical: '5%',
        padding: 20,
        left: 13,
    },
    logoImg: {
        width: 70,
        height: 50,
    },
    nameText: {
        fontSize: 30,
        top: 19,
        right: 38,
    },
    loginText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '9%',
        marginBottom: '6%',
    },
    input: {
        marginTop: '5%',
        marginBottom: '5%',
        height: 50,
        paddingStart: 20,
        padding: 10,
        borderRadius: 10,
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
    forgotPwordText: {
        width: '100%',
        paddingStart: '15%',
        textDecorationLine: 'underline',
        color: '#1E1E1E',
    },
    signUpText: {
        color: 'blue',
        marginBottom: 30,
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