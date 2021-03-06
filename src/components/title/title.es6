/* title.es6 */
import React from 'react';
import { Component } from '../../component';
import './title.css';

export class Title extends Component {
  constructor(props) {
    super(props);
  }

  // === Template ===
  template() {
    return (
      <div className={`layout horizontal center-justified
        ${this.props.className}`}
        styleName="wrapper"
        style={ this.props.style }>
        <span>{this.props.title}<span styleName="caret" className={`
          ${this.props.blinkCursor ? 'blinking' : 'static'}
          `}>_</span></span>
      </div>
    );
  }
}
