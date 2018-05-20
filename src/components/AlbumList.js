import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Album from './Album';
import { Header } from './common'
import glamourous from 'glamorous-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

const ScrollView = glamourous.scrollView({
  marginBottom: 190
});


class AlbumList extends Component {
  renderAlbums () {
    const { data } = this.props;

    return data.map((album) => {
      return (
        <Album album={album} key={album.id} />
      );
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render () {
    const { id } = this.props.albums;
    return (
      <View>
        <Text>Albums value: { id }</Text>
        <Header headerText="Albums" />
        <Button title="Log out" onPress={this.logout} />
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateProps)(AlbumList);