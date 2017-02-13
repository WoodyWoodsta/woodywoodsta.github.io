/* content.es6 */
import React from 'react';
import { Component } from '../../component';
import './content.css';

import { PageSwitcher } from '../page-switcher/page-switcher';

export class Content extends Component {

  // === Template ===
  template() {
    return (
      <div className={this.props.className} styleName="wrapper">
        <PageSwitcher page={this.props.nav.page}></PageSwitcher>
      </div>
    );
  }
}
