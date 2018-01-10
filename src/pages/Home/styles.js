import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  containerProfile: {
    padding: metrics.mediumMargin,
    paddingBottom: metrics.tinyMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageProfile: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 15,
  },

  textProfile: {
    color: colors.fuchsiaBlue,
    fontSize: fonts.big,
    fontWeight: '500',
    marginLeft: metrics.tinyMargin,
  },

  button: {
    height: 50,
    backgroundColor: colors.fuchsiaBlue,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.darkTransparent,
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },

  textButton: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  iconHeader: {
    color: colors.white,
  },

  buttonHeader: {
    alignItems: 'center',
  },

});

export default styles;
