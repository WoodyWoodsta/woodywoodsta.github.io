export let store; // eslint-disable-line import/no-mutable-exports

export function init(Vuex) {
  store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
  });
}
