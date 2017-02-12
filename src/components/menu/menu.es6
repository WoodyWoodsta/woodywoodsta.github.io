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
        <div styleName="menu-button" className="dark" onClick={this._onMenuButtonClick.bind(this, PAGES.ME)}>
          <MenuButton selected={this.state.selected.me}>Me</MenuButton>
        </div>
        <div styleName="menu-button" className="red" onClick={this._onMenuButtonClick.bind(this, PAGES.PROJECTS)}>
          <MenuButton selected={this.state.selected.projects}>Projects</MenuButton>
        </div>
        <div styleName="menu-button" className="blue" onClick={this._onMenuButtonClick.bind(this, PAGES.DESIGN)}>
          <MenuButton selected={this.state.selected.design}>Design</MenuButton>
        </div>
        <div styleName="menu-button" className="light" onClick={this._onMenuButtonClick.bind(this, PAGES.CV)}>
          <MenuButton selected={this.state.selected.cv}>CV</MenuButton>
        </div>
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
