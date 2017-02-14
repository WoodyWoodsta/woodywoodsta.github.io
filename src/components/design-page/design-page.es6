/* design-page.es6 */
import React from 'react';
import { Component } from '../../component';
import './design-page.css';

import { Page } from '../page/page';

export class DesignPage extends Component {

  // === Template ===
  template() {
    return (
      <Page showing={this.props.selected}>
        <h1 styleName="coming-soon">Coming Soon</h1>
      </Page>
    );
  }
}
