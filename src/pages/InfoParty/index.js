/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity, TextInput, Image, ActivityIndicator, Text, Keyboard, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from 'components/Header';
import DateTimePicker from 'react-native-modal-datetime-picker';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PartiesActions from 'store/ducks/parties';

import styles from './styles';

class InfoParty extends Component {
  static propTypes = {
    parties: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
    place: '',
    dateBegin: '',
    isDateTimePickerVisible: false,
  }

  navigateBack = () => {
    const { dispatch } = this.props;
    return dispatch(NavigationActions.back());
  }

  save = () => {
    const party = this.state;
    this.props.save(party);
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  changeDatePicked = (date) => {
    console.tron.log('A date has been picked: ', date);
    this.setState({ dateBegin: date });
    this.hideDateTimePicker();
  };

  renderRight = () => (
    <TouchableOpacity style={styles.buttonHeader} activeOpacity={0.6} onPress={this.save} >
      <Icon style={styles.iconHeader} name="check" size={18} />
    </TouchableOpacity>
  );

  renderLeft = () => (
    <TouchableOpacity style={styles.buttonHeader} activeOpacity={0.6} onPress={this.navigateBack} >
      <Icon style={styles.iconHeader} name="chevron-down" size={18} />
    </TouchableOpacity>
  );

  renderInputs = () => (
    <View>
      <View style={styles.containerInput}>
        <Image
          style={styles.image}
          source={{ uri: 'https://assets.gitlab-static.net/uploads/-/system/group/avatar/1001178/IMG_6151.JPG' }}
        />

        <TextInput
          style={styles.input}
          placeholder="Party name"
          onChangeText={name => this.setState({ name })}
          underlineColorAndroid="transparent"
          returnKeyType="next"
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Begin"
          value={this.state.dateBegin.toString()}
          onTouchStart={this.showDateTimePicker}
          underlineColorAndroid="transparent"
          onFocus={Keyboard.dismiss}
        />

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.changeDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Place"
          onChangeText={place => this.setState({ place })}
          underlineColorAndroid="transparent"
          returnKeyType="next"
        />
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={description => this.setState({ description })}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'iOS' ? 'padding' : null} style={styles.container}>
        <Header
          renderLeft={this.renderLeft}
          title="Info Party"
          renderRight={this.renderRight}
        />

        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          { this.props.parties.error &&
            <View style={styles.message}>
              <Text style={styles.textMessage}> Algo deu errado! </Text>
            </View>
          }

          { this.props.parties.loading
            ? <ActivityIndicator size="small" color="#7F5FC6" />
            : this.renderInputs() }
        </ScrollView>

      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  save: party => dispatch(PartiesActions.partySaveRequest(party)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoParty);
