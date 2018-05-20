import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';
import firebase from 'firebase';
import firebaseConfig from './config/firebase';

class RouterComponent extends Component {
  constructor () {
    super();
  }

  componentWillMount () {
    if(!firebase.apps.length)
      firebase.initializeApp(firebaseConfig);
  }

  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login"
            component={LoginForm}
            title="Please login"
            initial
             />

          <Scene key="albumList"
            component={AlbumList}
            title="Albums list" />

          <Scene key="albumDetails"
            component={AlbumDetails}
            title="Album details" />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;