import { router } from '../../router';
import { VIEWS } from '../../constants/navigation';

const viewArray = Object.values(VIEWS);

export function navigate(opts, destination) {
  if (!(destination in VIEWS)) {
    console.warn(`View '${destination}' does not exist!`);
    return;
  }

  router.push({ name: destination });
}

export function gotoNextView({ state, dispatch }) {
  const currentViewIdx = viewArray.indexOf(state.currentView);

  if (typeof currentViewIdx === 'number') {
    let nextViewIdx = currentViewIdx + 1;

    if (nextViewIdx >= viewArray.length) {
      nextViewIdx = 0;
    }

    dispatch('navigate', viewArray[nextViewIdx].name);
  } else {
    console.warn('Current view not recognised');
  }
}

export function gotoPreviousView({ state, dispatch }) {
  const currentViewIdx = viewArray.indexOf(state.currentView);

  if (typeof currentViewIdx === 'number') {
    let nextViewIdx = currentViewIdx - 1;

    if (nextViewIdx < 0) {
      nextViewIdx = viewArray.length - 1;
    }

    dispatch('navigate', viewArray[nextViewIdx].name);
  } else {
    console.warn('Current view not recognised');
  }
}
