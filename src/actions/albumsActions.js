import { SELECT_ALBUM, ALBUMS_LOADED } from '../types';
import axios from 'axios';

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
  return {
    type: SELECT_ALBUM,
    payload: id
  }
}