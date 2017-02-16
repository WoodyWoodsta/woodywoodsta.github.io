import Immutable from 'seamless-immutable';
import { store } from '../store/store';
import { UPDATE_SCROLL } from '../constants/scroll';

const SCROLL_THRESHOLD = 70;

const initialState = Immutable({
  pos: {
    y: 0,
  },
  isAtTop: true,
});

export const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCROLL: {
      // Flag non-zero scroll position
      const _state = state.set('isAtTop', action.pos.y === 0);

      // Prevent unnecessary state change. Cap the Y position at SCROLL_THRESHOLD
      if (action.pos.y <= SCROLL_THRESHOLD) {
        return _state.merge({ pos: action.pos });
      } else if (store.getState().scroll.pos.y !== SCROLL_THRESHOLD) {
        return _state.merge({ pos: { y: SCROLL_THRESHOLD } });
      }

      return _state;
    }
    default:
      return state;
  }
};
