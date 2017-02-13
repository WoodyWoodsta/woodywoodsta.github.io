/* portfolio.es6 */
import React from 'react';
import { Component } from '../../component';
import './portfolio.css';

import { HeaderContainer } from '../../containers/header';
import { ContentContainer } from '../../containers/content';

export class Portfolio extends Component {
  // === Template ===
  template() {
    return (
      <div className={`layout vertical center ${this._computeWrapperClass()}`} styleName="wrapper">
        <HeaderContainer />
        <ContentContainer />
      </div>
    );
  }

  // === Private ===
  _computeWrapperClass() {
    return this.props.config.theme.toLowerCase();
  }
}
