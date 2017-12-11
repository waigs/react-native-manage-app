import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCacrAw7BvJVKSYSzz6Toff-PSZ3RmKBxo',
      authDomain: 'manager-fe9d8.firebaseapp.com',
      databaseURL: 'https://manager-fe9d8.firebaseio.com',
      projectId: 'manager-fe9d8',
      storageBucket: 'manager-fe9d8.appspot.com',
      messagingSenderId: '732800882093'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
