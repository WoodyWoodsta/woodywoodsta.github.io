/* portfolio.es6 */
import React from 'react';
import { connect } from 'react-redux';
import { Component } from '../component';
import {
  showPages,
  hidePages,
} from '../actions/config';

class Portfolio extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props[`${this.props.config.isPagesShowing ? 'hide' : 'show'}Pages`]();
  }

  template() {
    return <div onClick={this.onClick} style={{ height: '100vw' }}></div>;
  }
}

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
});

export const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
