import * as systemConsts from './system';

import HomeViewComponent from '../views/home/home-view.component.vue';
import TechViewComponent from '../views/tech/tech-view.component.vue';
import GraphicsViewComponent from '../views/graphics/graphics-view.component.vue';
import CvViewComponent from '../views/cv/cv-view.component.vue';

export const ACTIONS = {
  NAVIGATE: 'NAVIGATE',
};

export const MUTATIONS = {
  SET_CURRENT_VIEW: 'SET_CURRENT_VIEW',
};

export const VIEWS = {
  HOME: {
    name: 'HOME',
    path: '/home',
    component: HomeViewComponent,
    title: 'Home',
    theme: systemConsts.THEMES.DARK,
  },
  TECH: {
    name: 'TECH',
    path: '/tech',
    component: TechViewComponent,
    title: 'Tech',
    theme: systemConsts.THEMES.RED,
  },
  GRAPHICS: {
    name: 'GRAPHICS',
    path: '/graphics',
    component: GraphicsViewComponent,
    title: 'Graphics',
    theme: systemConsts.THEMES.BLUE,
  },
  CV: {
    name: 'CV',
    path: '/cv',
    component: CvViewComponent,
    title: 'CV',
    theme: systemConsts.THEMES.LIGHT,
  },
  ABOUT: {
    name: 'ABOUT',
    path: '/about',
    component: CvViewComponent,
    title: 'About',
    theme: systemConsts.THEMES.DARK,
  },
};

export const DEFAULT_ROUTE = VIEWS.HOME;
