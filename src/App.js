import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Header } from './components/common';

import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList';
import albums from './data/music_albums.json';

import firebase from 'firebase';
import firebaseConf from './config/firebase';

export default class App extends Component {
  state = { loggedIn: false }

  componentWillMount () {
    firebase.initializeApp(firebaseConf);

    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ loggedIn: (user) });
    });
  }

  logout () {
    firebase.auth().signOut();
  }

  renderContent () {
    if(this.state.loggedIn){
      return (
        <Button title="Log out" onPress={this.logout} />
      );
    }else{
      return (<LoginForm />);
    }
  }

  render () {
    return (
      <View>
        <Header headerText="Login" />
        { this.renderContent() }
      </View>
    )
  }
}