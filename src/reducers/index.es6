/* index.es6 */
import { combineReducers } from 'redux';
import { navReducer } from './nav';
import { configReducer } from './config';
import { scrollReducer } from './scroll';
import { featuresReducer } from './features';

export const reducer = combineReducers({
  nav: navReducer,
  config: configReducer,
  scroll: scrollReducer,
  features: featuresReducer,
});
