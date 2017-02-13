/* page-switcher.es6 */
import React from 'react';
import { Component } from '../../component';
import './page-switcher.css';

import { PAGES } from '../../constants/nav';

import { MePage } from '../me-page/me-page';

export class PageSwitcher extends Component {

  // === Template ===
  template() {
    const generatedPage = () => {
      switch (this.props.page) {
        case PAGES.ME:
          return <MePage></MePage>;
      }
    };

    return (
      <div styleName="wrapper">
        { generatedPage }
      </div>
    );
  }
}
