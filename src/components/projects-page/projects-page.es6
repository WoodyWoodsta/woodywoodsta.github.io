/* projects-page.es6 */
import React from 'react';
import { Component } from '../../component';
import './projects-page.css';

import { Page } from '../page/page';

export class ProjectsPage extends Component {

  // === Template ===
  template() {
    return (
      <Page showing={this.props.selected}>
        <h1 styleName="coming-soon">Coming Soon</h1>
      </Page>
    );
  }
}
