/* features.es6 */
import {
  SHOW_TOAST,
  HIDE_TOAST,
} from '../constants/features';

/**
 * Spawn and show a toast with the specified message
 *
 * @param {Object} toastConfig A config object containing the message and an array of actions if applicable
 *  {
 *    message: 'A message',
 *    actions: {
 *      actionName: actionCallback,
 *    }
 *  }
 */
export const showToast = toastConfig => ({
  type: SHOW_TOAST,
  toastConfig,
});

/**
 * Hide the toast currently showing
 */
export const hideToast = () => ({
  type: HIDE_TOAST,
});
