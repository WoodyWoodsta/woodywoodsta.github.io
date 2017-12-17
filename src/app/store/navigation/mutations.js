export function setCurrentView(state, newView) {
  // TODO: Add param assertion

  if (state.navigation) {
    state.navigation.currentView = newView;
  }
}
