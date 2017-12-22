import * as navigationConts from './constants/navigation';

export let router;

export function init(VueRouter) {
  router = new VueRouter({
    routes: _mapRouteConsts(navigationConts.VIEWS),
  });

  router.push({ name: navigationConts.DEFAULT_ROUTE.name });
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
