import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  text: {
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
  },
  headerContainer: {
    padding: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 10,
    minHeight: 60,
  },
});
