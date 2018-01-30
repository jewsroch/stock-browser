import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import AppComponent from './components/containers/AppComponent';
import reduxStore from './configure-store';

const wrapper = document.getElementById('app');

wrapper && render(
  <Provider store={reduxStore}>
    <AppComponent />
  </Provider>,
  wrapper,
);

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    * {
      font-family: OpenSans,Helvetica Neue,Helvetica,Tahoma,Arial,FreeSans,sans-serif;
    }
  }
`;
/* eslint-enable no-unused-expressions */
