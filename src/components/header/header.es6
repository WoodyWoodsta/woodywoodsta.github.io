/* header.es6 */
import React from 'react';
import { Component } from '../../component';
import './header.css';

import { Title } from '../title/title';
import { Menu } from '../menu/menu';

export class Header extends Component {

  // === Template ===
  template() {
    return (
      <div className="layout vertical center center-justified" styleName="wrapper">
        <Title title="sean-wood"/>
        <Menu navigateToPage={this.props.navigateToPage} page={this.props.nav.page}></Menu>
      </div>
    );
  }
}
