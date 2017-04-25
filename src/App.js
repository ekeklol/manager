import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
