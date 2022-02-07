import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontWeight: 'bold',
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
