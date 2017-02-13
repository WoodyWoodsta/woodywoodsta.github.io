/* menu-button.es6 */
import React from 'react';
import { Component } from '../../component';
import './menu-button.css';

export class MenuButton extends Component {

  // === Template ===
  template() {
    return (
      <div className={`layout horizontal center center-justified
        ${this.props.selected ? 'selected' : ''}
        ${this.props.className}`}
        styleName="wrapper"
        onClick={this.props.onClick}>
        <div styleName="parallelogram"></div>
        <span styleName="button-text">{this.props.children}</span>
        <span styleName="selection-dot">•</span>
      </div>
    );
  }
}
