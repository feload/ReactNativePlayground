import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import glamorous from 'glamorous-native';

const ThumbnailImage = glamorous.image({
  width: 400,
  height: 300
});

export default class Album extends Component {
  render () {
    const { title, artist, image } = this.props.album;
    return (
      <View>
        <ThumbnailImage source={{ uri: image }} />
        <Text>{ title }</Text>
        <Text>{ artist }</Text>
      </View>
    )
  }
}