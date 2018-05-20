import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as albumsActions from '../actions/albumsActions';

import { View, Image, Text, Button } from 'react-native';
import { Card, CardSection } from './common/index';
import FullWidthImage from 'react-native-fullwidth-image'
import glamorous from 'glamorous-native';

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

class Album extends Component {
  componentWillMount () {
    console.log(this.props);
  }

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
        <Button title="See detail" onPress={() => {
          this.props.selectAlbum(1);
        }} />
      </Card>
    );
  }
}

export default connect(null, albumsActions)(Album);