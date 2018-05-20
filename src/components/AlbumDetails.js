import React, { Component } from 'react';
import { Text } from 'react-native';

export default ({ album }) => {
  return (
    <Text>{album.title}</Text>
  )
}