import React, { Component } from 'react';
import { View, Text, Image, Button, Keyboard } from 'react-native';
import Album from './Album';
import glamourous from 'glamorous-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as albumsActions from '../actions/albumsActions';
import * as sessionActions from '../actions/sessionActions';

const ScrollView = glamourous.scrollView({
  marginBottom: 0
});

class AlbumList extends Component {
  constructor () {
    super();
    this.logout = this.logout.bind(this);
  }

  componentWillMount () {
    Keyboard.dismiss();
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
    this.props.logout();
  }

  render() {
    const { selectedAlbum } = this.props;
    return (
      <View>
        <Text>{(selectedAlbum) ? selectedAlbum.title : ''}</Text>
        <Button title="Log out" onPress={this.logout} />
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albumsList.albums,
    selectedAlbum: state.albumsList.selectedAlbum
  }
}

const mapDispatchToProps = {
  ...albumsActions,
  ...sessionActions
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);