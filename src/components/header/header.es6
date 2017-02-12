/* header.es6 */
import React from 'react';
import { Component } from '../../component';
import './header.css';

import { Title } from '../title/title';

export class Header extends Component {

  // === Template ===
  template() {
    return (
      <div styleName="wrapper">
        <Title title="Sean Michael Wood"/>
      </div>
    );
  }
}
