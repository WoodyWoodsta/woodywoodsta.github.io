import Immutable from 'seamless-immutable';
import { store } from '../store/store';
import { UPDATE_SCROLL } from '../constants/scroll';

const SCROLL_THRESHOLD = 70;

const initialState = Immutable({
  pos: {
    y: 0,
  },
});

export const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCROLL:
      // Prevent unnecessary state change. Cap the Y position at SCROLL_THRESHOLD
      if (action.pos.y <= SCROLL_THRESHOLD) {
        return state.merge({ pos: action.pos });
      } else if (store.getState().scroll.pos.y !== SCROLL_THRESHOLD) {
        return state.merge({ pos: { y: SCROLL_THRESHOLD } });
      }
      return state;
    default:
      return state;
  }
};
