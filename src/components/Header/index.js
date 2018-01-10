/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

const Header = props => (
  <View style={styles.headerContainer}>
    <View style={styles.item}>
      { props.renderLeft() }
    </View>

    <Text style={styles.title}>{ props.title }</Text>

    <View style={styles.item}>
      { props.renderRight() }
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string,
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
};

Header.defaultProps = {
  title: '',
  renderLeft: () => {},
  renderRight: () => {},
};

export default Header;
