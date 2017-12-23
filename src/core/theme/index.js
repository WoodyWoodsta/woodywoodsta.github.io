import { CoreModule } from '../../utils/core-module';
import { store } from '../../store';
import * as navigationConsts from '../../constants/navigation';

export default new CoreModule('Themes', () => {
  initViewThemeChanger();
});

function initViewThemeChanger() {
  store.watch(state => state.navigation.currentView, _onViewChange);

  // First run
  _onViewChange(navigationConsts.DEFAULT_ROUTE);
}

function _onViewChange(newState, oldState) {
  if (oldState) {
    document.body.classList.remove(oldState.theme.class);
  }

  document.body.classList.add(newState.theme.class);
}
