import { router } from '../../router';
import { VIEWS, ACTIONS } from '../../constants/navigation';

export default {
  [ACTIONS.NAVIGATE]: (opts, destination) => {
    if (!(destination in VIEWS)) {
      console.warn(`View '${destination}' does not exist!`);
      return;
    }

    router.push({ name: destination });
  },
};
