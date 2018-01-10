import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.statusBarHeight + metrics.navBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.fuchsiaBlue,
    flexDirection: 'row',
  },

  title: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: '600',
    alignSelf: 'center',
  },

  item: {
    alignItems: 'center',
    width: 40,
  },
});

export default styles;
