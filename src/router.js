import * as navigationConsts from './constants/navigation';

import PickerViewComponent from './views/picker/picker-view.component.vue';
import ViewerViewComponent from './views/viewer/viewer-view.component.vue';
import HomeViewComponent from './views/home/home-view.component.vue';
import TechViewComponent from './views/tech/tech-view.component.vue';
import GraphicsViewComponent from './views/graphics/graphics-view.component.vue';
import CvViewComponent from './views/cv/cv-view.component.vue';

export let router; // eslint-disable-line import/no-mutable-exports

export function init(VueRouter) {
  _fillViewConfigs(navigationConsts.VIEWS_FLAT);

  router = new VueRouter({
    routes: _mapRouteConsts(navigationConsts.VIEWS),
  });

  router.push({ name: navigationConsts.DEFAULT_ROUTE.name });
}

export function linkStore(store) {
  const _onRouteChange = (viewName) => {
    store.commit(
      `navigation/${navigationConsts.MUTATIONS.SET_CURRENT_VIEW}`,
      navigationConsts.VIEWS_FLAT.find(view => view.name === viewName),
    );
  };
  store.watch(state => state.route && state.route.name, _onRouteChange);

  _onRouteChange(store.state.route && store.state.route.name);
}

// --- Private ---
function _fillViewConfigs(viewConstArr) {
  for (const viewConst of viewConstArr) {
    switch (viewConst.name) {
      case navigationConsts.VIEWS.PICKER.name:
        viewConst.component = PickerViewComponent;
        break;

      case navigationConsts.VIEWS.VIEWER.name:
        viewConst.component = ViewerViewComponent;
        break;

      case navigationConsts.VIEWS.VIEWER.children.CV.name:
        viewConst.component = CvViewComponent;
        break;

      case navigationConsts.VIEWS.VIEWER.children.GRAPHICS.name:
        viewConst.component = GraphicsViewComponent;
        break;

      case navigationConsts.VIEWS.VIEWER.children.HOME.name:
        viewConst.component = HomeViewComponent;
        break;

      case navigationConsts.VIEWS.VIEWER.children.TECH.name:
        viewConst.component = TechViewComponent;
        break;

      default:
        break;
    }
  }
}

function _mapRouteConsts(viewConsts) {
  return Object.values(viewConsts).map((viewConst) => {
    const res = Object.assign(
      {},
      {
        name: viewConst.name,
        path: viewConst.path,
        component: viewConst.component,
      }
    );

    if (viewConst.children) {
      Object.assign(res, { children: _mapRouteConsts(viewConst.children) });
    }

    return res;
  });
}
