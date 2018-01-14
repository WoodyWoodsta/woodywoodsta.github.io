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
  INTRO: {
    name: 'INTRO',
    path: '/intro',
    component: {},
    title: 'Welcome',
    theme: systemConsts.THEMES.DARK,
  },
  HOME: {
    name: 'HOME',
    path: '/home',
    component: {},
    title: 'Home',
    theme: systemConsts.THEMES.DARK,
  },
  TECH: {
    name: 'TECH',
    path: '/tech',
    component: {},
    title: 'Tech',
    theme: systemConsts.THEMES.RED,
  },
  GRAPHICS: {
    name: 'GRAPHICS',
    path: '/graphics',
    component: {},
    title: 'Graphics',
    theme: systemConsts.THEMES.BLUE,
  },
  CV: {
    name: 'CV',
    path: '/cv',
    component: {},
    title: 'CV',
    theme: systemConsts.THEMES.LIGHT,
  },
  ABOUT: {
    name: 'ABOUT',
    path: '/about',
    component: {},
    title: 'About',
    theme: systemConsts.THEMES.DARK,
  },
};

export const DEFAULT_ROUTE = VIEWS.INTRO;
