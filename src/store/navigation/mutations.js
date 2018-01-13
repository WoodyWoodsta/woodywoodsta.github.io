import * as consts from '../../constants/navigation';

export default {
  [consts.MUTATIONS.SET_CURRENT_VIEW]: (state, newView) => {
    // TODO: Add param assertion

    if (state) {
      state.currentView = newView;
    }
  },
};
