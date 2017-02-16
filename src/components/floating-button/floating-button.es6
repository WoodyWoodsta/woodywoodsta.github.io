/* floating-button.es6 */
import React from 'react';
import { Component } from '../../component';
import './floating-button.css';

export class FloatingButton extends Component {
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
      <div styleName="wrapper" className={`layout vertical center center-justified
        ${this.props.className}
        ${this.state.pressed ? 'pressed' : ''}`}
        onClick={this.props.onClick}
        onMouseDown={this._onPress}
        onMouseLeave={this._onUnpress}
        onMouseUp={this._onUnpress}
        onTouchStart={this._onPress}
        onTouchEnd={this._onUnpress}>
        { this.props.children }
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
