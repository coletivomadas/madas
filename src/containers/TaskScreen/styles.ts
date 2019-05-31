import { Dimensions, StyleSheet } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    backgroundColor: '#CBD0FF',
    height: deviceHeight * 0.15 + 34 + 5,
    width: deviceWidth,
  },
  header: {
    height: deviceHeight * 0.15,
  },
  headerContent: {
    color: '#122930',
    fontSize: 28,
    marginTop: 40,
  },
  content: {
    paddingHorizontal: 20,
  },
});
