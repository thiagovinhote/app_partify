import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: metrics.smallMargin,
  },

  listItem: {
    marginTop: metrics.smallMargin,
  },

  'listItem-first': {
    marginTop: metrics.tinyMargin,
  },

  emptyList: {
    color: colors.regular,
    fontSize: fonts.small,
    alignSelf: 'center',
  },
});

export default styles;
