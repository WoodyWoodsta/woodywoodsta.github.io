/* portfolio.es6 */
import { connect } from 'react-redux';
import { store, subscribePath } from '../store/store';
import { Portfolio } from '../components/portfolio/portfolio';
import {
  showPages,
  hidePages,
  changeTheme,
} from '../actions/config';
import { updateScroll } from '../actions/scroll';
import { PAGES } from '../constants/nav';
import { THEMES } from '../constants/config';

subscribePath('nav.page', () => {
  let theme;
  const page = store.getState().nav.page;
  const isPagesShowing = store.getState().config.isPagesShowing;
  switch (page) {
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

  setTimeout(() => {
    store.dispatch(changeTheme(theme));
  }, 0);

  if (page === PAGES.NONE && isPagesShowing) {
    setTimeout(() => store.dispatch(hidePages()), 0);
  } else if (!isPagesShowing) {
    setTimeout(() => store.dispatch(showPages()), 0);
  }
});

// === Redux Mapping ===
const mapStateToProps = ({ config, scroll, features }) => ({
  config,
  scroll,
  features,
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
  updateScroll: (...args) => {
    dispatch(updateScroll(...args));
  },
});

export const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);
