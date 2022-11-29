/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Navigator from './src';
import {Provider} from 'react-redux';
import state from './src/state';
import {SafeAreaView} from 'react-native';

const App = () => (
  <Provider store={state}>
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Navigator />
    </SafeAreaView>
  </Provider>
);

export default App;
