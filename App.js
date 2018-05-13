import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import albums from './src/data/music_albums.json';

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