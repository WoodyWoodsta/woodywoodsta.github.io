import { GETTERS } from '../../constants/navigation';

export default {
  [GETTERS.CURRENT_TITLE]: state => state.currentView && state.currentView.title,
};
