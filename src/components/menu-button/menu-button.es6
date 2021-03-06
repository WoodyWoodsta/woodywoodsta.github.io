/* menu-button.es6 */
import React from 'react';
import { Component } from '../../component';
import './menu-button.css';

export class MenuButton extends Component {
  constructor(props) {
    super(props);

    // Bound callbacks
    this._onPress = this._onPress.bind(this);
    this._onUnpress = this._onUnpress.bind(this);

    this.state = { pressed: false };
  }

  // === Template ===
  template() {
    return (
      <div className={`layout horizontal center center-justified
        ${this.props.selected ? 'selected' : ''}
        ${this.props.className}
        ${this.state.pressed ? 'pressed' : ''}`}
        styleName="wrapper"
        onClick={this.props.onClick}
        onMouseDown={this._onPress}
        onMouseLeave={this._onUnpress}
        onMouseUp={this._onUnpress}
        onTouchStart={this._onPress}
        onTouchEnd={this._onUnpress}>
        <div styleName="parallelogram"></div>
        <span styleName="button-text">{this.props.children}</span>
        <span styleName="selection-dot">•</span>
      </div>
    );
  }

  // === Private ===
  _onPress() {
    if (!this.state.pressed) {
      this.setState({ pressed: true });
    }
  }

  _onUnpress() {
    if (this.state.pressed) {
      this.setState({ pressed: false });
    }
  }
}
