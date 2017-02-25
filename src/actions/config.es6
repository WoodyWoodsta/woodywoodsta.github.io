/* config.es6 */
import {
  SHOW_PAGES,
  HIDE_PAGES,
  CHANGE_THEME,
  UPDATE_LOADING_STATE,
} from '../constants/config';

/**
 * Show the pages view, contracting the title to position at the top of the page
 */
export const showPages = () => ({
  type: SHOW_PAGES,
});

/**
 * Hide the pages view, expanding the title to fill the whole page
 */
export const hidePages = () => ({
  type: HIDE_PAGES,
});

/**
 * Change the theme
 *
 * @param {String} theme The new theme (color)
 */
export const changeTheme = theme => ({
  type: CHANGE_THEME,
  theme,
});

/**
 * Change the loading state wrt. the introduction screen
 *
 * @param {String} state The new loading state
 */
export const updateLoadingState = state => ({
  type: UPDATE_LOADING_STATE,
  state,
});
