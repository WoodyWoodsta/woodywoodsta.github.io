/* header.es6 */
import { connect } from 'react-redux';
import { Header } from '../components/header/header';

import { navigateToPage } from '../actions/nav';

// === Redux Mappings ===
const mapStateToProps = ({ config, nav }) => ({
  config,
  nav,
});

const mapDispatchToProps = dispatch => ({
  navigateToPage: (page) => {
    dispatch(navigateToPage(page));
  },
});

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
