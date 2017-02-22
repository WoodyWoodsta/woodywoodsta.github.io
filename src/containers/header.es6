/* header.es6 */
import { connect } from 'react-redux';
import { Header } from '../components/header/header';

import { navigateToPage } from '../actions/nav';
import { updateScroll } from '../actions/scroll';

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
  updateScroll: (pos) => {
    dispatch(updateScroll(pos));
  },
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
