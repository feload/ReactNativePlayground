import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import AlbumDetail from './AlbumDetail';
import glamourous from 'glamorous-native';

const ScrollView = glamourous.scrollView({
  marginBottom: 50
});

export default class AlbumList extends Component {
  renderAlbums () {
    const { albums } = this.props;

    return albums.map((album) => {
      return (
        <AlbumDetail album={album} key={album.id} />
      );
    });
  }

  render () {
    return (
      <ScrollView style={{ marginBottom: 50 }}>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}
