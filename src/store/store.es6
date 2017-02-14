/* store.es6 */
import { createStore } from 'redux';
import initSubscriber from 'redux-subscriber';
import { reducer } from '../reducers';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const subscribePath = initSubscriber(store);
