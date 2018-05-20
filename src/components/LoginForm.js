import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { Card, CardSection, Spinner } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../actions/sessionActions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.state = { email: null, password: null }
  }

  componentWillMount() {
    this.props.loginLoading(false);
  }

  onInputChange(field, value) {
    this.setState({ [field]: value });
  }

  onButtonPress () {
    this.setState({ error: null });
    const { email, password } = this.state;
    if(email && email.length && password && password.length) this.props.logIn({ email, password });
  }

  render () {
    return (
      <View>
        <Card>
          <Text>{this.props.error}</Text>
          <TextInput
            placeholder="Email"
            onChangeText = {
            (value) => this.onInputChange('email', value)
          }/>
          <TextInput
          placeholder = "Password"
          secureTextEntry
          onChangeText = {
            (value) => this.onInputChange('password', value)
          }/>
          {
            (this.props.loading) ?
              <Spinner /> :
              <Button title="Login" onPress={this.onButtonPress} />
            }
        </Card>
      </View>
    )
  }
}

const mapPropsState = (state) => {
  return {
    error: state.session.error,
    loading: state.session.loading
  }
}

export default connect(mapPropsState, actions)(LoginForm);