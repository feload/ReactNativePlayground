import { SELECT_ALBUM } from '../types';
export const selectAlbum = (id) => {
  return {
    type: SELECT_ALBUM,
    payload: Math.random()
  }
}