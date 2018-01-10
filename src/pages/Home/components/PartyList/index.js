/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, FlatList, ActivityIndicator, Text, RefreshControl } from 'react-native';
import PartyItem from '../PartyItem';

import styles from './styles';

class PartyList extends Component {
  static propTypes = {
    parties: PropTypes.arrayOf(PartyItem.propTypes.party).isRequired,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    loading: false,
  }

  renderList = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={this.props.parties}
      renderItem={this.renderItem}
      keyExtractor={item => item['_id']}
    />
  );

  renderItem = ({ item, index }) => (
    <PartyItem
      style={[
        styles.listItem,
        (index === 0) ? styles['listItem-first'] : {},
      ]}
      party={item}
    />
  );

  renderEmpty = () => (
    <Text style={styles.emptyList}> Nenhuma party encontrada</Text>
  );

  renderContent = () => (
    this.props.parties.length === 0
      ? this.renderEmpty()
      : this.renderList()
  );

  render() {
    return (
      <View style={styles.container}>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#7F5FC6" />
          : this.renderContent() }

      </View>
    );
  }
}

export default PartyList;
