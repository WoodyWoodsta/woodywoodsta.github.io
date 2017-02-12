/* portfolio.es6 */
import { connect } from 'react-redux';
import { Portfolio } from '../components/portfolio/portfolio';
import {
  showPages,
  hidePages,
  changeTheme,
} from '../actions/config';

// === Container ===

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
