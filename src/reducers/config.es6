/* config.es6 */
import Immutable from 'seamless-immutable';
import {
  SHOW_PAGES,
  HIDE_PAGES,
  CHANGE_THEME,
  THEMES,
} from '../constants/config';

const initialState = Immutable({
  isPagesShowing: false,
  theme: THEMES.DARK,
});

export const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PAGES:
      return state.set('isPagesShowing', true);

    case HIDE_PAGES:
      return state.set('isPagesShowing', false);

    case CHANGE_THEME:
      return state.set('theme', action.theme);

    default:
      return state;
  }
};
