import { SELECT_ALBUM, ALBUMS_LOADED } from '../types';

const initialState = {
  albums: [],
  selectedAlbum: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ALBUM:
      const selectedAlbum = null;
      const filteredAlbums = state.albums.filter((album) => {
        return (album.id == action.payload);
      });

      if (filteredAlbums.length) selectedAlbum = filteredAlbums[0];

      state = Object.assign({}, state, { selectedAlbum });
      break;

    case ALBUMS_LOADED:
      state = Object.assign({}, state, { albums: action.payload });
      break;
  }
  return state;
}