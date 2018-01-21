import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppComponent from './components/containers/AppComponent';
import configureStore from './configure-store';
import style from './styles.css';

const wrapper = document.getElementById('app');

wrapper && render(
  <Provider store={configureStore()}>
    <AppComponent />
  </Provider>,
  wrapper,
);
