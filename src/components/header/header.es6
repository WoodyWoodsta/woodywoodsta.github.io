/* header.es6 */
import React from 'react';
import { Component } from '../../component';
import './header.css';

import { THEMES } from '../../constants/config';

import { Title } from '../title/title';
import { Menu } from '../menu/menu';

export class Header extends Component {

  // === Template ===
  template() {
    return (
      <div className={`layout vertical center center-justified
        ${this.props.config.theme === THEMES.LIGHT ? 'light' : ''}
        ${this.props.config.isPagesShowing ? 'pages-showing' : ''}`}
        styleName="wrapper">
        <Title title="sean-wood" styleName="title"/>
        <Menu navigateToPage={this.props.navigateToPage} page={this.props.nav.page}></Menu>
      </div>
    );
  }
}
