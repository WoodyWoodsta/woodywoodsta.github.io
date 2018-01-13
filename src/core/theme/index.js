import { CoreModule } from '../../utils/core-module';
import { store } from '../../store';
import * as navigationConsts from '../../constants/navigation';
import * as systemConsts from '../../constants/system';

export default new CoreModule('Themes', () => {
  initViewThemeChanger();
});

function initViewThemeChanger() {
  store.watch(state => state.system.theme, _onThemeChange);
  store.watch(state => state.navigation.currentView, _onCurrentViewChanged);

  // First run
  _onThemeChange(navigationConsts.DEFAULT_ROUTE.theme);
}

function _onThemeChange(newState, oldState) {
  if (oldState) {
    document.body.classList.remove(oldState.class);
  }

  document.body.classList.add(newState.class);
}

function _onCurrentViewChanged(newState) {
  if (newState.theme && newState.theme) {
    store.commit(`system/${systemConsts.MUTATIONS.SET_THEME}`, newState.theme);
  }
}
