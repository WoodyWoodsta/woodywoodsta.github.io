/* features.es6 */
import Immutable from 'seamless-immutable';
import {
  SHOW_TOAST,
  HIDE_TOAST,
} from '../constants/features';

const initialState = Immutable({
  toastIsShowing: false,
  toastConfig: null,
});

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return state.merge({ toastIsShowing: true, toastConfig: action.toastConfig });

    case HIDE_TOAST:
      return state.merge({ toastIsShowing: false });

    default:
      return state;
  }
};
