import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 20,
    fontSize: 70,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 2,
    margin: 10,
  },
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  textButton: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
