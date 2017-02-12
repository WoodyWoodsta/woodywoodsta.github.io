/* portfolio.es6 */
import { connect } from 'react-redux';
import { store, subscribePath } from '../store/store';
import { Portfolio } from '../components/portfolio/portfolio';
import {
  showPages,
  hidePages,
  changeTheme,
} from '../actions/config';
import { PAGES } from '../constants/nav';
import { THEMES } from '../constants/config';

subscribePath('nav.page', () => {
  let theme;
  switch (store.getState().nav.page) {
    case PAGES.ME:
      theme = THEMES.DARK;
      break;
    case PAGES.PROJECTS:
      theme = THEMES.RED;
      break;
    case PAGES.DESIGN:
      theme = THEMES.BLUE;
      break;
    case PAGES.CV:
      theme = THEMES.LIGHT;
      break;
    default:
      theme = THEMES.DARK;
      break;
  }

  console.log(theme);
  setTimeout(() => {
    store.dispatch(changeTheme(theme));
  }, 0);
});

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
