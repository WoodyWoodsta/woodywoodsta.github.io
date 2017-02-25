/* config.es6 */
import Immutable from 'seamless-immutable';
import {
  SHOW_PAGES,
  HIDE_PAGES,
  CHANGE_THEME,
  UPDATE_LOADING_STATE,
  THEMES,
  LOADING_STATES,
} from '../constants/config';

const initialState = Immutable({
  isPagesShowing: false,
  theme: THEMES.DARK,
  loadingState: LOADING_STATES.INITIALISING,
});

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PAGES:
      return state.set('isPagesShowing', true);

    case HIDE_PAGES:
      return state.set('isPagesShowing', false);

    case CHANGE_THEME:
      return state.set('theme', action.theme);

    case UPDATE_LOADING_STATE:
      return state.set('loadingState', action.state);

    default:
      return state;
  }
};
