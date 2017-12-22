import { SystemComponentAsync } from './views/system/system.component.vue';
import { store, init as initStore } from './store';
import { router, init as initRouter } from './router';
import * as storeModules from './store/index';

export function run() {
  return importModule('./bundles/vendor.js')
    .then(({
      Vue,
      VueRouter,
      Vuex,
      routerSync,
    }) => {
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

      // Default Bundle
      window.dispatchEvent(new CustomEvent('app-is-ready'));
      window._appIsReady = true;

      // Application Entry Point
      return SystemComponentAsync.then((component) => {
        routerSync.sync(store, router);

        new Vue({
          router,
          store,
          render: h => h(component),
        }).$mount('#app');
      });
    })
    .then(() => 'App loaded');
}
