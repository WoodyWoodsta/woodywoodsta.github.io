/* toast.es6 */
import React from 'react';
import { Component } from '../../component';
import './toast.css';

import { AppButton } from '../app-button/app-button';

export class Toast extends Component {

  // === Template ===
  template() {
    let actions;
    if (this.props.actions) {
      actions = Object.keys(this.props.actions).map((actionConfigKey) => {
        return (
          <AppButton styleName="app-button"
            onClick={this.props.actions[actionConfigKey]}>
            <span>{actionConfigKey}</span>
          </AppButton>
        );
      });
    }

    return (
      <div styleName="wrapper" className={`layout horizontal center start-justified wrap
        ${this.props.className}
        ${this.props.active ? 'active' : ''}`}>
        <span styleName="text">{ this.props.message }</span>
        { actions }
      </div>
    );
  }
}
