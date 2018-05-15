import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import albums from './data/music_albums.json';

import firebase from 'firebase';
import firebaseConf from './config/firebase';
firebase.initializeApp(firebaseConf);

export default class App extends Component {
  componentWillMount () {}
  render () {
    return (
      <View>
        <Header headerText="Albums" />
        <AlbumList albums={albums} />
      </View>
    )
  }
}