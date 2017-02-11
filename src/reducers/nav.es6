/* nav.es6 */
import Immutable from 'seamless-immutable';
import {
  NAVIGATE_TO_PAGE,
  PAGES,
} from '../constants/nav';

const initialState = Immutable({
  page: PAGES.ME,
});

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
};
