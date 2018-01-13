import * as navigationConts from './constants/navigation';

export let router; // eslint-disable-line import/no-mutable-exports

export function init(VueRouter) {
  router = new VueRouter({
    routes: _mapRouteConsts(navigationConts.VIEWS),
  });

  router.push({ name: navigationConts.DEFAULT_ROUTE.name });
}

export function linkStore(store) {
  store.watch(state => state.route && state.route.name, (newValue) => {
    store.commit(`navigation/${navigationConts.MUTATIONS.SET_CURRENT_VIEW}`, navigationConts.VIEWS[newValue]);
  });
}

// --- Private ---
function _mapRouteConsts(viewConsts) {
  return Object.keys(viewConsts).map((viewConstKey) => {
    const viewConst = viewConsts[viewConstKey];

    return {
      name: viewConst.name,
      path: viewConst.path,
      component: viewConst.component,
    };
  });
}
