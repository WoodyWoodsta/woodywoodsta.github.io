/* menu.es6 */
import React from 'react';
import { Component } from '../../component';
import './menu.css';

import { PAGES } from '../../constants/nav';

import { MenuButton } from '../menu-button/menu-button';

export class Menu extends Component {
  // === Lifecycle ===
  componentWillMount() {
    this._updateSelectedState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._updateSelectedState(nextProps);
  }

  // === Template ===
  template() {
    return (
      <div className="layout horizontal center center-justified" styleName="wrapper">
        <MenuButton styleName="menu-button" className="button-dark"
          selected={this.state.selected.me}
          onClick={this._onMenuButtonClick.bind(this, PAGES.ME)}>Me</MenuButton>
        <MenuButton styleName="menu-button" className="button-red"
          selected={this.state.selected.projects}
          onClick={this._onMenuButtonClick.bind(this, PAGES.PROJECTS)}>Projects</MenuButton>
        <MenuButton styleName="menu-button" className="button-blue"
          selected={this.state.selected.design}
          onClick={this._onMenuButtonClick.bind(this, PAGES.DESIGN)}>Design</MenuButton>
        <MenuButton styleName="menu-button" className="button-light"
          selected={this.state.selected.cv}
          onClick={this._onMenuButtonClick.bind(this, PAGES.CV)}>CV</MenuButton>
      </div>
    );
  }

  // === Private ===
  _onMenuButtonClick(page) {
    this.props.navigateToPage(page);
  }

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
