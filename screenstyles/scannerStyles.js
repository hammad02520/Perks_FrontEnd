import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#132D7B',
  },
  background: {
    backgroundColor: '#132D7B',
    width: '100%',
    height: '60%',
    top: '10%',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'relative',
  },
  statusText: {
    fontSize: 18,
  },
  overlay: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    paddingTop: '15%',
    paddingHorizontal: 30,
    backgroundColor: '#132D7B',
    ...StyleSheet.absoluteFillObject,
  },
  scanText: {
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 10,
    color: '#132D7B',
  },
  explanationText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#132D7B',
    marginHorizontal: 10,
    textAlign: 'center',
  },
  header: {
    backgroundColor: "white",
    alignItems: "center",
    position: 'absolute',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    marginTop: '20%',
    borderRadius: 10,
  },
  barcodeScanner: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '70%',
  },
  tapToScan: {
    marginTop: 0,
    backgroundColor: '#ADD8E6',
    top: '85%',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    position: 'absolute',
  },
  tapToScanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#132D7B',
  }
});
export default styles;