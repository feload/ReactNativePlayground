import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header } from './components/common';

import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList';
import albums from './data/music_albums.json';

import firebase from 'firebase';
import firebaseConf from './config/firebase';
firebase.initializeApp(firebaseConf);

export default class App extends Component {
  render () {
    return (
      <View>
        <LoginForm />
        {/*
        <Header headerText="Albums" />
        <AlbumList albums={albums} />
        */}
      </View>
    )
  }
}