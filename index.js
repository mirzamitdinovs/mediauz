import {AppRegistry} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/stores';
import App from './App';

AppRegistry.registerComponent(appName, () =>
  gestureHandlerRootHOC(() => (
    <Provider store={store}>
      <App />
    </Provider>
  )),
);
