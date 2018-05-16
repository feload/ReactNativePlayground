import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { Card, CardSection, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.state = { email: null, password: null, error: null, loading: false }
  }

  onInputChange(field, value) {
    this.setState({ [field]: value });
  }

  onButtonPress () {
    this.setState({ error: null, loading: true });

    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: 'Authentication failed.' });
      });
    });
  }

  render () {
    return (
      <Card>
        <Text>{this.state.error}</Text>
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
          (this.state.loading) ?
            <Spinner /> :
            <Button title="Login" onPress={this.onButtonPress} />
          }
      </Card>
    )
  }
}