import {StyleSheet, Dimensions} from 'react-native';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: deviceSizes.height / 3,
    padding: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
