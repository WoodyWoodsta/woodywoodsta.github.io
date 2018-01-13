import { MUTATIONS, WINDOW_MODES, THEMES } from '../../constants/system';

const _windowModes = Object.values(WINDOW_MODES);
const _themes = Object.values(THEMES);

export default {
  [MUTATIONS.SET_THEME]: (state, newTheme) => {
    if (_themes.includes(newTheme)) {
      state.theme = newTheme;
      return;
    }

    console.error(`No such theme: ${newTheme}`);
  },

  [MUTATIONS.SET_WINDOW_MODE]: (state, newWindowMode) => {
    if (_windowModes.includes(newWindowMode)) {
      state.windowMode = newWindowMode;
      return;
    }

    console.error(`No such window mode: ${newWindowMode}`);
  },
};
