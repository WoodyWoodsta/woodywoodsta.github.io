export let store;

export function init(Vuex) {
  store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
  });
}
