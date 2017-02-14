/* scroll.es6 */
import { UPDATE_SCROLL } from '../constants/scroll';

export const updateScroll = pos => ({
  type: UPDATE_SCROLL,
  pos,
});
