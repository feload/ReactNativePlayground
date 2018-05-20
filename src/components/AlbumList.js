import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Album from './Album';
import { Header } from './common'
import glamourous from 'glamorous-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as albumsActions from '../actions/albumsActions';

const ScrollView = glamourous.scrollView({
  marginBottom: 220
});

class AlbumList extends Component {
  componentWillMount () {
    this.props.loadAlbums();
  }

  renderAlbums () {
    const { albums } = this.props;
    return albums.map((album) => {
      return (
        <Album album={album} key={album.id} />
      );
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    const { selectedAlbum } = this.props;
    return (
      <View>
        <Text>{(selectedAlbum) ? selectedAlbum.title : ''}</Text>
        <Header headerText="Albums" />
        <Button title="Log out" onPress={this.logout} />
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      </View>
    )
  }
}

const mapStateProps = (state) => {
  return {
    albums: state.albumsList.albums,
    selectedAlbum: state.albumsList.selectedAlbum
  }
}

export default connect(mapStateProps, albumsActions)(AlbumList);