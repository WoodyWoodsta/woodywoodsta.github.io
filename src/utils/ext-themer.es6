/* ext-themer.es6 */
import { store, subscribePath } from '../store/store';
import { THEMES } from '../constants/config';

let unsubscribe;

function startExternalTheming() {
  initialTheme();
  unsubscribe = subscribePath('config.theme', () => {
    const theme = store.getState().config.theme;
    styleBody(theme);
  });
}

function stopExternalTheming() {
  unsubscribe();
}

function initialTheme() {
  styleBody(store.getState().config.theme.toLowerCase());
}

function styleBody(theme) {
  // Clear classes
  Object.keys(THEMES).forEach((themeKey) => {
    document.body.classList.remove(THEMES[themeKey].toLowerCase());
  });

  document.body.classList.add(theme.toLowerCase());
}

// Entry
startExternalTheming();
