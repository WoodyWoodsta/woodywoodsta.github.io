import { router } from '../../router';
import { ACTIONS, VIEWS_FLAT } from '../../constants/navigation';

export default {
  [ACTIONS.NAVIGATE]: (opts, destination) => {
    if (!(VIEWS_FLAT.some(view => view.name === destination))) {
      console.warn(`View '${destination}' does not exist!`);
      return;
    }

    router.push({ name: destination });
  },
};
