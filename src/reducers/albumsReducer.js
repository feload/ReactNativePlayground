import { SELECT_ALBUM } from '../types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_ALBUM:
      state = Object.assign({}, { id: action.payload })
      break;
  }
  return state;
}