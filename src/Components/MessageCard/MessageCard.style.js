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
    minHeight: 30,
  },
  dislikeContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dislikeButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dislikeCountContainer: {
    backgroundColor: '#ccc',
    marginRight: 5,
    padding: 2,
    borderRadius: 10,
  },
  dislikeCounter: {
    color: '#fff',
    fontWeight: '800',
  },
});
