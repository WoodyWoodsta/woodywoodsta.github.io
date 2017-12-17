import { AppComponentAsync } from './views/app/app.component.vue';
import { store, init as initStore } from './store';
import * as storeModules from './store/index';

export function run() {
  return importModule('./bundles/vendor.js')
    .then(({
      Vue,
      VueRouter,
      Vuex,
    }) => {
      const _router = new VueRouter({});
      Vue.use(VueRouter);
      Vue.use(Vuex);

      // Initialise the store
      initStore(Vuex);
      Object.keys(storeModules).forEach((path) => {
        store.registerModule(path, storeModules[path]);
      });

      // Default Bundle
      window.dispatchEvent(new CustomEvent('app-is-ready'));
      window._appIsReady = true;

      // Application Entry Point
      return AppComponentAsync.then((component) => {
        new Vue({
          router: _router,
          store,
          render: h => h(component),
        }).$mount('#app');
      });
    })
    .then(() => 'App loaded');
}
