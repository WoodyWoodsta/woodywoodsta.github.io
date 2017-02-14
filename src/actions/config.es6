/* config.es6 */
import {
  SHOW_PAGES,
  HIDE_PAGES,
  CHANGE_THEME,
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
