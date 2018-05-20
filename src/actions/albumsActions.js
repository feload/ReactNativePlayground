import { SELECT_ALBUM, ALBUMS_LOADED } from '../types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const loadAlbums = () => {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/feload/reactnative-playground/master/src/data/music_albums.json')
    .then((response) => {
      const { data } = response;
      dispatch(albumsLoaded(data));
    });
  }
}

export const albumsLoaded = (albums) => {
  return {
    type: ALBUMS_LOADED,
    payload: albums
  }
};

export const selectAlbum = (id) => {
  return (dispatch, getState) => {
    const albums = getState().albumsList.albums;
    const filteredAlbums = albums.filter((album) => {
      return (album.id == id);
    })
    const album = filteredAlbums[0];
    const { title } = album;
    Actions.albumDetails({ title, album });
  }
}