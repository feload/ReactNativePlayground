import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import albums from './data/music_albums.json';

export default class App extends Component {
  render () {
    return (
      <View>
        <Header headerText="Albums" />
        <AlbumList albums={albums} />
      </View>
    )
  }
}