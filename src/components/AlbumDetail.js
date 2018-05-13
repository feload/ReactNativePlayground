import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image'
import glamorous from 'glamorous-native';
import Card from './Card';
import CardSection from './CardSection';

const FlexView = glamorous.view({
  flex: 1,
  flexDirection: 'row'
});

const AlbumView = glamorous.view({
  marginLeft: 10
});

const TitleText = glamorous.text({
  fontSize: 20
});

const ArtistText = glamorous.text({
  color: '#aaa'
});

const CoverImage = glamorous.image({
  width: 100,
  height: 100
});

export default class AlbumDetail extends Component {
  render() {
    const { id, title, artist, thumbnail_image, image } = this.props.album;
    return (
      <Card key={id}>
        <CardSection>
          <FlexView>
            <View>
              <Image source={{ uri: thumbnail_image }}
                style={{ width: 60, height: 60 }} />
            </View>
            <AlbumView>
              <TitleText>{title}</TitleText>
              <ArtistText>{artist}</ArtistText>
            </AlbumView>
          </FlexView>
        </CardSection>
        <View>
          <FullWidthImage source={{ uri: image }} />
        </View>
      </Card>
    );
  }
}