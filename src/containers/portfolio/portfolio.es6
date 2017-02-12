/* portfolio.es6 */
import React from 'react';
import { connect } from 'react-redux';
import { Component } from '../../component';
import './portfolio.css';
import {
  showPages,
  hidePages,
  changeTheme,
} from '../../actions/config';
import { THEMES } from '../../constants/config';

// === Container ===
class Portfolio extends Component {
  // === Lifecycle ===
  constructor(props) {
    super(props);
  }

  // === Template ===
  template() {
    return (
      <div className={this._computeShellContainerClass()} styleName="shell-container">

      </div>
    );
  }

  // === Private ===
  _computeShellContainerClass() {
    return this.props.config.theme.toLowerCase;
  }
}

// === Redux Mapping ===
const mapStateToProps = ({ config }) => ({
  config,
});

const mapDispatchToProps = dispatch => ({
  showPages: () => {
    dispatch(showPages());
  },
  hidePages: () => {
    dispatch(hidePages());
  },
  changeTheme: (theme) => {
    dispatch(changeTheme(theme));
  },
});

export const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
