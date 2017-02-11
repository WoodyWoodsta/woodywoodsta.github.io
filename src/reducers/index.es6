/* index.es6 */
import { combineReducers } from 'redux';
import { navReducer } from './nav';
import { configReducer } from './config';

export const reducer = combineReducers({
  nav: navReducer,
  config: configReducer,
});
