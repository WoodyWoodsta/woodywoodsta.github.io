import { VIEWS } from '../../constants/navigation';

export function navigate({ commit }, destination) {
  if (!(destination in VIEWS)) {
    console.warn(`View '${destination}' does not exist!`);
    return;
  }

  commit('navigation/setCurrentView', VIEWS[destination]);
}
