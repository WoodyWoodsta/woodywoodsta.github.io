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
      <div className={`${this._computeWrapperClass()}`} styleName="wrapper">
        <div className="layout vertical center" styleName="widthWrapper">
          <HeaderContainer styleName="header" />
          <ContentContainer className="layout self-stretch" />
        </div>
      </div>
    );
  }

  // === Private ===
  _computeWrapperClass() {
    return this.props.config.theme.toLowerCase();
  }
}
