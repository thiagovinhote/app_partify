/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image } from 'react-native';

import styles from './styles';

const PartyItem = ({ party, style }) => (
  <View style={[
      styles.container,
      style,
    ]}
  >
    <View style={styles.left}>

      <Image
        style={styles.image}
        source={{ uri: party.image }}
      />

      <View style={styles.containerInfo}>
        <Text style={styles.title}> { party.name } </Text>
        <Text style={styles.place}> { party.place } </Text>
        <Text style={styles.date}> { party.dateBegin } </Text>
      </View>
    </View>

    <View style={styles.right} />
  </View>
);

PartyItem.propTypes = {
  party: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    dateBegin: PropTypes.string,
    place: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  style: View.propTypes.style,
};

PartyItem.defaultProps = {
  style: {},
};

export default PartyItem;
