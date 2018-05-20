import { LOGIN_ERROR, LOGIN_LOADING } from '../types';
import firebase from 'firebase';

export const logIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch(loginLoading(true));
    dispatch(loginError(null));
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
        dispatch(loginLoading(false));
        dispatch(loginError('Authentication failed.'));
      });
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