/* header.es6 */
import React from 'react';
import { Component } from '../../component';
import './header.css';

import { THEMES } from '../../constants/config';

import { Title } from '../title/title';
import { Menu } from '../menu/menu';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.scrollThreshold = 70;
  }

  // === Template ===
  template() {
    return (
      <div className={`layout vertical center center-justified
        ${this.props.config.theme === THEMES.LIGHT ? 'light' : ''}
        ${this.props.config.isPagesShowing ? 'pages-showing' : ''}
        ${this.props.className}
        ${this.props.scroll.pos.y >= this.scrollThreshold ? 'fixed' : ''}`}
        styleName="wrapper"
        style={{ marginTop: Math.max(-this.scrollThreshold, -this.props.scroll.pos.y) }}>
        <Title title="sean-wood" styleName="title" style={{ opacity: Math.max(0, 1 - (this.props.scroll.pos.y / 50)) }}/>
        <Menu
          navigateToPage={this.props.navigateToPage}
          updateScroll={this.props.updateScroll}
          page={this.props.nav.page}>
        </Menu>
      </div>
    );
  }
}
