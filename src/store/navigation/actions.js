import { router } from '../../router';
import { VIEWS } from '../../constants/navigation';

export function navigate(opts, destination) {
  if (!(destination in VIEWS)) {
    console.warn(`View '${destination}' does not exist!`);
    return;
  }

  router.push({ name: destination });
}
