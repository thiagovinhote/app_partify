import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  tinyMargin: 5,
  smallMargin: 10,
  mediumMargin: 16,
  baseMargin: 20,
  bigMargin: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: 44,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  baseRadius: 10,
  tinyRadius: 4,
};
