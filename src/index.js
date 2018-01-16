import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import * as routerSync from 'vuex-router-sync';

import { store, init as initStore } from './store';
import { router, init as initRouter, linkStore } from './router';
import * as storeModules from './store/index';
import * as systemConsts from './constants/system';

import './core/index';

import SystemComponent from './views/system/system.component.vue';
import components from './components/index';

Vue.use(components);

Vue.use(VueRouter);
Vue.use(Vuex);

// Initialise the store
initStore(Vuex);
Object.keys(storeModules).forEach((path) => {
  store.registerModule(path, storeModules[path]);
});

// Initialise the router
initRouter(VueRouter, store);
// TODO: Register the routes

// Application Entry Point
routerSync.sync(store, router);
linkStore(store);

// Default Bundle
window.dispatchEvent(new CustomEvent(systemConsts.APP_IS_READY));
window[systemConsts.APP_IS_READY] = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(SystemComponent),
});
