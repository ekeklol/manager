import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCmTLxNpGlz0r594MhGzflUO15AOk4KlnU',
      authDomain: 'manager-874fc.firebaseapp.com',
      databaseURL: 'https://manager-874fc.firebaseio.com',
      projectId: 'manager-874fc',
      storageBucket: 'manager-874fc.appspot.com',
      messagingSenderId: '132733631030'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
