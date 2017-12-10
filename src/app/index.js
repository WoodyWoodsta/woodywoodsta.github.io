import { AppComponentAsync } from './views/app/app.component.vue';

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

      // Default Bundle
      window.dispatchEvent(new CustomEvent('app-is-ready'));
      window._appIsReady = true;

      // Application Entry Point
      return AppComponentAsync.then((component) => {
        new Vue({
          router: _router,
          // store,
          render: h => h(component),
        }).$mount('#app');
      });
    })
    .then(() => 'App loaded');
}
