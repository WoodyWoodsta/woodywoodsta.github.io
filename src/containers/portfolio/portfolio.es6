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
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.state = {
      themeIndex: 0,
    };
  }

  onClick() {
    if (this.state.themeIndex >= Object.keys(THEMES).length - 1) {
      this.setState({ themeIndex: 0 });
    } else {
      this.setState(prevState => ({
        themeIndex: prevState.themeIndex + 1,
      }));
    }

    setTimeout(() => {
      console.log(this.state.themeIndex);
      const key = Object.keys(THEMES)[this.state.themeIndex];
      this.props.changeTheme(THEMES[key]);
    });
  }

  template() {
    return (
      <div onClick={this.onClick} className={this.props.config.theme.toLowerCase()} styleName='div'></div>
    );
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
