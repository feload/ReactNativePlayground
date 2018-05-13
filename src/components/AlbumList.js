import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Album from './Album';

export default class AlbumList extends Component {
  render () {
    const { albums } = this.props;
    return (
      <View>
        <FlatList
        data={albums}
        renderItem={
          ({ item }) =>
            <Album
              album={item} />
        }
        keyExtractor={(item) => item.id} />
      </View>
    )
  }
}
