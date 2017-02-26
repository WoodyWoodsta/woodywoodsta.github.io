/* features.es6 */
import { store } from '../store/store';
import {
  showToast,
  hideToast,
 } from '../actions/features';

/**
 * Spawn a toast message with the specified config, and hide after the timeout period if given.
 *
 * @export
 * @param {any} config The config to pass to the toast
 */
export function spawnToast(config) {
  store.dispatch(showToast(config));

  if ((!config.actions || config.actions.length === 0) || config.timeout > 0) {
    setTimeout(() => store.dispatch(hideToast()), config.timeout);
  }
}

export {
  hideToast,
};

if (window._pendingToast) {
  spawnToast(window._pendingToast);
}

window._featuresUtils = {
  spawnToast,
};
