import { combineReducers } from 'redux';
import albumsReducer from './albumsReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  albumsList: albumsReducer,
  session: sessionReducer
});