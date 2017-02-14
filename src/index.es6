/* index.es6 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './utils/bootstrap';

import { PortfolioContainer } from './containers/portfolio';
import { store } from './store/store';
import './utils/ext-themer';

// TODO: Render on action
render(
  <Provider store={store}>
    <PortfolioContainer />
  </Provider>,
  document.getElementById('mount')
);
