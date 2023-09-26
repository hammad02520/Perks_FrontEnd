import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: '6%',
        paddingRight: '10%',
        marginTop: '10%',
        marginBottom: '5%',
    },
    openButton: {
        height: '10%',
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: '2%',
        // Shadow properties
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            },
            android: {
            elevation: 4,
            },
        }),
    },
    shawarmaImg: {
        width: '20%',
        height: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',  
    },
    shishiImg: {
        width: '20%',
        height: '80%',
        borderRadius: 10,
    },
    craveImg: {
        width: '20%',
        height: '80%',
        borderRadius: 45,
    },
    restaurantInfo: {
        paddingTop: 10,
        paddingStart: '8%',
    },
    restaurantname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    pointsCard: {
        fontSize: 12,
    },
});

export default styles;
