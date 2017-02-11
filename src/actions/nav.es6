/* nav.es6 */
import {
  NAVIGATE_TO_PAGE,
} from '../constants/nav';

/**
 * Navigate to a specific page in the content container
 *
 * @param {String} page - The page to which to navigate
 */
export const navigateToPage = page => ({
  type: NAVIGATE_TO_PAGE,
  page,
});
