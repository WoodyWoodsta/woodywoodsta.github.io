'use strict';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(reg) {
      reg.onupdatefound = function() {
        var installingWorker = reg.installing;

        installingWorker.onstatechange = function() {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                console.log('New or updated content is available.');
                _spawnToast({
                  message: 'New or updated content available.',
                  actions: {
                    Refresh: _refresh,
                  },
                });
              } else {
                console.log('Content is now available offline!');
                _spawnToast({
                  message: 'Content is now available offline!',
                  timeout: 5000,
                });
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
    };
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });
}

function _spawnToast(config) {
  if (window._featuresUtils) {
    window._featuresUtils.spawnToast(config);
  } else {
    window._pendingToast = config;
  }
}

function _refresh() {
  document.location.reload();
}
