/* menu-button.es6 */
import React from 'react';
import { Component } from '../../component';
import './menu-button.css';

export class MenuButton extends Component {

  // === Template ===
  template() {
    return (
      <div className={`layout horizontal center center-justified ${this.props.selected ? 'selected' : ''}`} styleName="wrapper">
        <div styleName="parallelogram"></div>
        <span styleName="selection-dot">•</span>
        <span styleName="button-text">{this.props.children}</span>
      </div>
    );
  }
}
