import Immutable from 'seamless-immutable';
import { UPDATE_SCROLL } from '../constants/scroll';

const initialState = Immutable({
  pos: {
    y: 0,
  },
});

export const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCROLL:
      return state.merge({ pos: action.pos });
    default:
      return state;
  }
};
