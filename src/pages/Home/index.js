/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from 'components/Header';
import PartyList from 'pages/Home/components/PartyList';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PartiesActions from 'store/ducks/parties';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    parties: PropTypes.shape({
      data: PartyList.propTypes.parties,
      loading: PropTypes.bool,
    }).isRequired,
    partyRequest: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.partyRequest();
  }

  navigateInfoParty = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'InfoParty',
    }));
  }

  renderLeft = () => (
    <TouchableOpacity
      style={styles.buttonHeader}
      activeOpacity={0.6}
      onPress={this.props.partyRequest}
    >
      <Icon style={styles.iconHeader} name="refresh" size={18} />
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Header
          renderLeft={this.renderLeft}
          title="Parties"
        />

        <View style={styles.containerProfile}>
          <Image
            style={styles.imageProfile}
            source={{ uri: 'https://assets.gitlab-static.net/uploads/-/system/group/avatar/1001178/IMG_6151.JPG' }}
          />
          <Text style={styles.textProfile}> Thiago Vinhote </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <PartyList
            parties={this.props.parties.data}
            loading={this.props.parties.loading}
          />
        </ScrollView>

        <TouchableOpacity
          style={styles.button}
          onPress={this.navigateInfoParty}
          activeOpacity={0.6}
        >
          <Text style={styles.textButton}> Create party </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  partyRequest: () => dispatch(PartiesActions.partyRequest()),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
