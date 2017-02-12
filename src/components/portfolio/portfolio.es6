/* portfolio.es6 */
import React from 'react';
import { Component } from '../../component';
import './portfolio.css';

import { HeaderContainer } from '../../containers/header';
import { ContentContainer } from '../../containers/content';

export class Portfolio extends Component {
  // === Lifecycle ===
  constructor(props) {
    super(props);
  }

  // === Template ===
  template() {
    return (
      <div className={`layout vertical center ${this._computeShellContainerClass()}`} styleName="shell-container">
        <HeaderContainer />
        <ContentContainer />
      </div>
    );
  }

  // === Private ===
  _computeShellContainerClass() {
    return this.props.config.theme.toLowerCase();
  }
}
