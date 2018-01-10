import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  iconHeader: {
    color: colors.white,
  },

  buttonHeader: {
    alignItems: 'center',
  },

  content: {
    margin: metrics.smallMargin,
    marginBottom: 0,
  },

  containerInput: {
    marginTop: metrics.smallMargin,
    backgroundColor: colors.fuchsiaBlue,
    padding: metrics.smallMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    fontSize: fonts.big,
    padding: metrics.tinyMargin,
    textAlign: 'center',
    alignSelf: 'stretch',
    color: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },

  image: {
    width: 70,
    height: 70,
    margin: metrics.tinyMargin,
    borderColor: colors.burningOrange,
    borderRadius: 70 / 2,
    borderWidth: 2,
  },

  message: {
    backgroundColor: colors.danger,
    padding: metrics.smallMargin,
    alignItems: 'center',
  },

  textMessage: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
});

export default styles;
