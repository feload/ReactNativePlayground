import { LOGIN_ERROR, LOGIN_LOADING } from '../types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const logIn = ({ email, password }) => {
  return (dispatch) => {

    dispatch(loginLoading(true));
    dispatch(loginError(null));

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      Actions.albumList();
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        Actions.albumList();
      })
      .catch(() => {
        dispatch(loginLoading(false));
        dispatch(loginError('Authentication failed.'));
      });
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => {
      Actions.login();
    });
  }
}

export const loginLoading = (isLoading) => {
  return {
    type: LOGIN_LOADING,
    payload: isLoading
  }
}

export const loginError = (error_message) => {
  return {
    type: LOGIN_ERROR,
    payload: error_message
  }
}