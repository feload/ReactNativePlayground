import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { Header } from './common'
import glamourous from 'glamorous-native';
import firebase from 'firebase';

const ScrollView = glamourous.scrollView({
  marginBottom: 190
});


class AlbumList extends Component {
  renderAlbums () {
    const { albums } = this.props;

    return albums.map((album) => {
      return (
        <AlbumDetail album={album} key={album.id} />
      );
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render () {
    return (
      <View>
        <Header headerText="Albums" />
        <Button title="Log out" onPress={this.logout} />
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      </View>
    )
  }
}

export default AlbumList;