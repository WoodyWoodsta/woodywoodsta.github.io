/* header.es6 */
import { connect } from 'react-redux';
import { Header } from '../components/header/header';

import { navigateToPage } from '../actions/nav';
import { updateScroll } from '../actions/scroll';
import { updateLoadingState } from '../actions/config';

// === Redux Mappings ===
const mapStateToProps = ({ config, nav, scroll }) => ({
  config,
  nav,
  scroll,
});

const mapDispatchToProps = dispatch => ({
  navigateToPage: (page) => {
    dispatch(navigateToPage(page));
  },
  updateScroll: (...args) => {
    dispatch(updateScroll(...args));
  },
  updateLoadingState: (state) => {
    dispatch(updateLoadingState(state));
  },
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
