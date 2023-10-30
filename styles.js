import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: 'white', // Set your background color here
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        padding: 5,
      },
      mainButton: {
            width: 80,
            height: 30,
            backgroundColor: "#8224D4", // Customize the button background color
            justifyContent: "center", // Center text vertically
            alignItems: "center", // Center text horizontally
            borderRadius: 20, // Add rounded corners
        },
        btnText: {
            fontSize: 15,
            color: "white",
        },
        customButton: {
            width: '75%',
            height: '7%',
            backgroundColor: "#02113F", // Customize the button background color
            justifyContent: "center", // Center text vertically
            alignItems: "center", // Center text horizontally
            borderRadius: 20, // Add rounded corners
            marginTop: '8%',
            marginBottom: '8%',
          },
          buttonText: {
            fontSize: 18,
            color: "#ECE1E1",
          },
          getAndRedeemButton: {
            backgroundColor: '#02113F',
            borderRadius: 10,
            textAlign: 'center',
            //   padding: 7,
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginLeft: 10,
          },
          getAndRedeemReward: {
              fontSize: 13,
              color: 'white',
          },
          

          // in the rewards page
          rewardContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
            paddingRight: '5%',
            paddingTop: '5%',
            paddingBottom: '2%',
            borderBottomWidth: 1,
            borderColor: '#02113F',
          },
          rewardImg: {
            width: '20%',
            height: '100%',
            resizeMode: 'contain',
          },
          rewardInfo: {
              width: '65%',
              paddingStart: 15,
          },
          rewardCard: {
              fontSize: 19,
              fontWeight: '500',
              color: 'black',
              paddingBottom: 10,
          },
          pointsCard: {
              fontSize: 13,
              color: 'black'
          },
          card: {
              width: '90%',
              height: '28%',
              borderradius: 30,
              marginBottom: '5%',
              marginTop: '0%',
              backgroundColor: 'black',
              borderRadius: 10,
          },
          contentOfCard: {
              width: '100%',
              paddingTop: 25,
              paddingHorizontal: 20,
          },
          restaurantName: {
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
              paddingBottom: 10,
          },
          points: {
              color: 'white',
              fontSize: 40,
              fontWeight: 'bold',
              alignSelf: 'center',
          },
          remainingPoints: {
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'center',
          },
          userName: {
              color: 'white',
              fontSize: 15,
              fontWeight: '400',
              top: '15%',
          },
          leftTitle: {
              fontSize: 18,
              width: '100%',
              paddingLeft: '10%',
              paddingTop: 25,
              paddingBottom: 5,
              fontWeight: 'bold',
          },

          // for rewards page
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 20,
          },
          image: {
            width: 70,
            height: 60,
            resizeMode: 'contain',
            backgroundColor: '#D5FFFF',
          },
          borderradiusforimage:{
            borderradius: '20%',
            borderWidth: 1,
            borderColor: '#bebebe',
          },
});

export default globalStyles;
