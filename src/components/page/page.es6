/* page.es6 */
import React from 'react';
import { Component } from '../../component';
import './page.css';

import { SiteFooter } from '../site-footer/site-footer';

export class Page extends Component {
  constructor(props) {
    super(props);

    this._onWrapperTransitionend = this._onWrapperTransitionend.bind(this);

    this.state = {
      isDisplaying: props.showing,
      isShowing: props.showing,
    };
  }

  componentWillReceiveProps(nextProps) {
    this._onShowingChanged(nextProps.showing);
  }

  // === Template ===
  template() {
    return (
      <div styleName="wrapper" ref={ (wrapper) => { this.wrapper = wrapper; } } className={`
        ${this.state.isDisplaying ? 'displaying' : ''}
        ${this.state.isShowing ? 'showing' : ''}
        ${this.props.className}`}>
        { this.props.children }
        <SiteFooter/>
      </div>
    );
  }

  // === Private ===
  _onShowingChanged(showing) {
    if (showing && !this.props.showing) {
      this.setState({ isDisplaying: true });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        this.setState({ isShowing: true });
      }));
    } else if (!showing && this.props.showing) {
      this.setState({ isShowing: false });
      this.wrapper.addEventListener('transitionend', this._onWrapperTransitionend);
    }
  }

  _onWrapperTransitionend() {
    this.setState({ isDisplaying: false });
    this.wrapper.removeEventListener('transitionend', this._onWrapperTransitionend);
  }
}
