import { CoreModule } from '../../utils/core-module';
import { store } from '../../store';
import { MUTATIONS } from '../../constants/system';

export default new CoreModule('System', () => {
  initSideBarChanger();
});

function initSideBarChanger() {
  store.watch(state => state.navigation.currentView, _closeSidePane);
  window.addEventListener('resize', _closeSidePane);

  _closeSidePane();
}

function _closeSidePane() {
  if (store.state.system && store.state.system.sidePaneOpen) {
    store.commit(`system/${MUTATIONS.SET_SIDE_PANE_OPEN}`, false);
  }
}
