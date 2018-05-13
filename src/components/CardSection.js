import React, { Component } from 'react';
import glamorous from 'glamorous-native';

const CardSectionView = glamorous.view({
  padding: 10,
  borderColor: '#f1f1f1',
  borderStyle: 'solid',
  borderWidth: 1
});

export default class CardSection extends Component {
  render () {
    const { children } = this.props;
    return (
      <CardSectionView>
        { children }
      </CardSectionView>
    );
  }
}