/* index.es6 */
import React from 'react';
import { render } from 'react-dom';

render(
  <div style={{ height: 100, width: 100, background: 'green' }}></div>,
  document.getElementById('mount')
);
