import * as navigationConsts from './constants/navigation';

import PickerViewComponent from './views/picker/picker-view.component.vue';
import HomeViewComponent from './views/home/home-view.component.vue';
import TechViewComponent from './views/tech/tech-view.component.vue';
import GraphicsViewComponent from './views/graphics/graphics-view.component.vue';
import CvViewComponent from './views/cv/cv-view.component.vue';

export let router; // eslint-disable-line import/no-mutable-exports

export function init(VueRouter) {
  _fillViewConfigs();

  router = new VueRouter({
    routes: _mapRouteConsts(navigationConsts.VIEWS),
  });

  router.push({ name: navigationConsts.DEFAULT_ROUTE.name });
}

export function linkStore(store) {
  const _onRouteChange = (newState) => {
    store.commit(`navigation/${navigationConsts.MUTATIONS.SET_CURRENT_VIEW}`, navigationConsts.VIEWS[newState]);
  };
  store.watch(state => state.route && state.route.name, _onRouteChange);

  _onRouteChange(store.state.route && store.state.route.name);
}

// --- Private ---
function _fillViewConfigs() {
  Object.values(navigationConsts.VIEWS).forEach((view) => {
    switch (view.name) {
      case navigationConsts.VIEWS.ABOUT.name:
        navigationConsts.VIEWS.ABOUT.component = HomeViewComponent;
        break;

      case navigationConsts.VIEWS.CV.name:
        navigationConsts.VIEWS.CV.component = CvViewComponent;
        break;

      case navigationConsts.VIEWS.GRAPHICS.name:
        navigationConsts.VIEWS.GRAPHICS.component = GraphicsViewComponent;
        break;

      case navigationConsts.VIEWS.HOME.name:
        navigationConsts.VIEWS.HOME.component = HomeViewComponent;
        break;

      case navigationConsts.VIEWS.PICKER.name:
        navigationConsts.VIEWS.PICKER.component = PickerViewComponent;
        break;

      case navigationConsts.VIEWS.TECH.name:
        navigationConsts.VIEWS.TECH.component = TechViewComponent;
        break;

      default:
        break;
    }
  });
}

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
