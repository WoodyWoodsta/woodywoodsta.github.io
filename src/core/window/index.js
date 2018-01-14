import { CoreModule } from '../../utils/core-module';
import { store } from '../../store';

import * as systemConsts from '../../constants/system';
import * as navigationConsts from '../../constants/navigation';

export default new CoreModule('Window', () => {
  initWindowModeChanger();
});

function initWindowModeChanger() {
  store.watch(state => state.navigation.currentView, _onCurrentViewChange);

  _onCurrentViewChange(store.state.navigation.currentView);
}

function _onCurrentViewChange(newState) {
  let newWindowMode = systemConsts.WINDOW_MODES.NORMAL;

  if (newState === navigationConsts.VIEWS.PICKER) {
    newWindowMode = systemConsts.WINDOW_MODES.PICKER;
  }

  store.commit(`system/${systemConsts.MUTATIONS.SET_WINDOW_MODE}`, newWindowMode);
}
