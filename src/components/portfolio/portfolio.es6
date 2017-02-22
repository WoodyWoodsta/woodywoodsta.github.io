/* portfolio.es6 */
import React from 'react';
import ReactSVG from 'react-svg';
import { Component } from '../../component';
import { subscribePath, store } from '../../store/store';
import './portfolio.css';

import { HeaderContainer } from '../../containers/header';
import { ContentContainer } from '../../containers/content';
import { FloatingButton } from '../floating-button/floating-button';

export class Portfolio extends Component {
  // === Lifecycle ===
  constructor(props) {
    super(props);

    this._onScroll = this._onScroll.bind(this);
    this._onScrollToTopClick = this._onScrollToTopClick.bind(this);

    this._unsub = {
      navPage: subscribePath('nav.page', () => {
        this.portfolioWrapper.scrollTop = 0;
      }),
    };
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
        <div styleName="scroll-to-top-wrapper" className={this.props.scroll.isAtTop ? 'hidden' : ''}>
          <FloatingButton onClick={ this._onScrollToTopClick }>
            <ReactSVG path="assets/icons/chevron-double-up.svg" styleName="scroll-to-top-icon"></ReactSVG>
          </FloatingButton>
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

  _onScrollToTopClick() {
    this.portfolioWrapper.scrollTop = 0;
  }
}
