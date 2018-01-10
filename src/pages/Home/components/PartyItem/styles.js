import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({

  container: {
    marginHorizontal: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.fuchsiaBlue,
    shadowColor: colors.darkTransparent,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    borderWidth: 2,
    borderColor: colors.burningOrange,
    alignSelf: 'center',
  },

  containerInfo: {
    flexDirection: 'column',
    paddingLeft: metrics.smallMargin,
  },

  title: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: '600',
  },

  place: {
    color: colors.white,
    fontSize: fonts.regular,
    marginTop: metrics.tinyMargin,
    marginLeft: 5,
  },

  date: {
    color: colors.white,
    fontSize: fonts.regular,
    marginTop: metrics.tinyMargin,
  },

  left: {
    padding: metrics.smallMargin,
    paddingVertical: metrics.mediumMargin,
    flexDirection: 'row',
  },

  right: {
    width: 20,
    backgroundColor: colors.burningOrange,
  },
});

export default styles;
