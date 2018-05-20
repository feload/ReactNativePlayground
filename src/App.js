import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { Header, Spinner } from './components/common';

import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList';
import albums from './data/music_albums.json';

import firebase from 'firebase';
import firebaseConf from './config/firebase';

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount () {
    firebase.initializeApp(firebaseConf);

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case null:
        return <Spinner />
      break;
      case false:
        return <LoginForm />;
      break;
      default:
        return (<AlbumList albums={albums} />);
      break;
    }
  }

  render () {
    return (
      <View>
        { this.renderContent() }
      </View>
    )
  }
}