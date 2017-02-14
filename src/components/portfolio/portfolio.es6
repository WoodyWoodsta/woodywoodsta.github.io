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

    this._onScroll = this._onScroll.bind(this);
  }

  componentDidMount() {
    this.portfolioWrapper.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    this.portfolioWrapper.removeEventListener('scroll', this._onScroll);
  }

  // === Template ===
  template() {
    return (
      <div ref={ (ref) => { this.portfolioWrapper = ref; }} className={`${this._computeWrapperClass()}`} styleName="wrapper">
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

  _onScroll(event) {
    // TODO: Improve scrolling perf. Consider lowering the frequency of these updates
    this.props.updateScroll({ y: event.target.scrollTop });
  }
}
