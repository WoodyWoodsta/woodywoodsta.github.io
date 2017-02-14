/* page-switcher.es6 */
import React from 'react';
import { Component } from '../../component';
import './page-switcher.css';

import { PAGES } from '../../constants/nav';

import { MePage } from '../me-page/me-page';
import { ProjectsPage } from '../projects-page/projects-page';
import { DesignPage } from '../design-page/design-page';
import { CVPage } from '../cv-page/cv-page';

export class PageSwitcher extends Component {
  // === Lifecycle ===
  componentWillMount() {
    this._updateSelectedState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateSelectedState(nextProps);
  }

  // === Template ===
  template() {
    const pages = {
      [PAGES.ME]: <MePage selected={this.state.selected.me } key={1}/>,
      [PAGES.PROJECTS]: <ProjectsPage selected={ this.state.selected.projects } key={2}/>,
      [PAGES.DESIGN]: <DesignPage selected={ this.state.selected.design } key={3}/>,
      [PAGES.CV]: <CVPage selected={ this.state.selected.cv } key={4}/>,
    };
    const _pages = [];

    Object.keys(pages).forEach((pagesKey) => {
      _pages.push(pages[pagesKey]);
    });

    return (
      <div className={this.props.className} styleName="wrapper">
        { _pages }
      </div>
    );
  }

  // === Private ===
  _updateSelectedState(props) {
    this.setState({
      selected: {
        me: props.page === PAGES.ME,
        projects: props.page === PAGES.PROJECTS,
        design: props.page === PAGES.DESIGN,
        cv: props.page === PAGES.CV,
      },
    });
  }
}
