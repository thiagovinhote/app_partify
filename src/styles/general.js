import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  section: {
    margin: metrics.mediumMargin,
  },

  sectionTitle: {
    color: colors.capeCod,
    fontWeight: 'bold',
    fontSize: fonts.bigger,
    alignSelf: 'flex-start',
    marginBottom: metrics.bigMargin,
  },
};

export default general;
