/* index.es6 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PortfolioContainer } from './containers/portfolio';
import { store } from './store/store';

// TODO: Render on action
render(
  <Provider store={store}>
    <PortfolioContainer />
  </Provider>,
  document.getElementById('mount')
);
