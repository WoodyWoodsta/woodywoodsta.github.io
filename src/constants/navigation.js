import * as systemConsts from './system';

export const ACTIONS = {
  NAVIGATE: 'NAVIGATE',
};

export const MUTATIONS = {
  SET_CURRENT_VIEW: 'SET_CURRENT_VIEW',
};

export const GETTERS = {
  CURRENT_TITLE: 'CURRENT_TITLE',
};

export const VIEWS = {
  PICKER: {
    name: 'PICKER',
    path: '/picker',
    component: {},
    title: 'Welcome',
    theme: systemConsts.THEMES.DARK,
  },
  VIEWER: {
    name: 'VIEWER',
    path: '/viewer',
    component: {},
    theme: systemConsts.THEMES.DARK,
    children: {
      HOME: {
        name: 'HOME',
        path: 'home',
        component: {},
        title: 'Home',
        theme: systemConsts.THEMES.DARK,
      },
      TECH: {
        name: 'TECH',
        path: 'tech',
        component: {},
        title: 'Tech',
        theme: systemConsts.THEMES.RED,
      },
      GRAPHICS: {
        name: 'GRAPHICS',
        path: 'graphics',
        component: {},
        title: 'Graphics',
        theme: systemConsts.THEMES.BLUE,
      },
      CV: {
        name: 'CV',
        path: 'cv',
        component: {},
        title: 'CV',
        theme: systemConsts.THEMES.LIGHT,
      },
    },
  },
};

export const VIEWS_FLAT = _flattenViewConsts(VIEWS);

export const DEFAULT_ROUTE = VIEWS.PICKER;

function _flattenViewConsts(viewConsts, res = []) {
  return res.concat(Object.values(viewConsts).reduce((acc, viewConst) => {
    let local = acc;
    local.push(viewConst);

    if (viewConst.children) {
      local = local.concat(_flattenViewConsts(viewConst.children, local));
    }

    return local;
  }, res));
}
