var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

let SystemComponent;
SystemComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "system-component" }, [_c('div', { staticClass: "header" }, [_c('h1', [_vm._v("Hello World")]), _vm._v(" "), _c('button', { on: { "click": _vm._onNavigateButtonClick } }, [_vm._v("Navigate to a new place")])]), _vm._v(" "), _c('div', { staticClass: "body" }, [_vm._v(" " + _vm._s(_vm.currentView) + " ")])]);
  }, staticRenderFns: [],
  name: 'app',
  methods: {
    _onNavigateButtonClick() {
      console.log('Clicked!');
    }
  }
};

const SystemComponentAsync = new Promise(resolve => {
  importModule('./bundles/vendor.js').then(({ Vuex }) => {
    const { mapState, mapActions } = Vuex;

    resolve(_extends({}, SystemComponent, {

      computed: _extends({}, mapState('navigation', ['currentView'])),

      methods: _extends({}, SystemComponent.methods, mapActions('navigation', ['navigate']))
    }));
  });
});

let store;

function init(Vuex) {
  store = new Vuex.Store({
    strict: "development" !== 'production'
  });
}

var HomeViewComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "home-view-component" });
  }, staticRenderFns: [],
  name: 'home-view'
};

var TechViewComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "tech-view-component" });
  }, staticRenderFns: [],
  name: 'tech-view'
};

var GraphicsViewComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "graphics-view-component" });
  }, staticRenderFns: [],
  name: 'graphics-view'
};

var CvViewComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', { staticClass: "cv-view-component" });
  }, staticRenderFns: [],
  name: 'cv-view'
};

const VIEWS = {
  HOME: {
    name: 'HOME',
    path: '/home',
    component: HomeViewComponent,
    title: 'Home'
  },
  TECH: {
    name: 'TECH',
    path: '/tech',
    component: TechViewComponent,
    title: 'Tech'
  },
  GRAPHICS: {
    name: 'GRAPHICS',
    path: '/graphics',
    component: GraphicsViewComponent,
    title: 'Graphics'
  },
  CV: {
    name: 'CV',
    path: '/cv',
    component: CvViewComponent,
    title: 'CV'
  }
};

const DEFAULT_ROUTE = VIEWS.HOME;

let router;

function init$1(VueRouter) {
  router = new VueRouter({
    routes: _mapRouteConsts(VIEWS)
  });

  router.push({ name: DEFAULT_ROUTE.name });
}

// --- Private ---
function _mapRouteConsts(viewConsts) {
  return Object.keys(viewConsts).map(viewConstKey => {
    const viewConst = viewConsts[viewConstKey];

    return {
      name: viewConst.name,
      path: viewConst.path,
      component: viewConst.component
    };
  });
}

const THEMES = {
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  RED: 'RED',
  BLUE: 'BLUE'
};

var state = {
  theme: THEMES.DARK
};

var index = {
  state,
  namespaced: true
};

var state$1 = {
  currentView: VIEWS.HOME,
  availableViews: []
};

function setCurrentView(state, newView) {
  // TODO: Add param assertion

  if (state.navigation) {
    state.navigation.currentView = newView;
  }
}

var mutations = Object.freeze({
	setCurrentView: setCurrentView
});

function navigate({ commit }, destination) {
  if (!(destination in VIEWS)) {
    console.warn(`View '${destination}' does not exist!`);
    return;
  }

  commit('setCurrentView', VIEWS[destination]);
}

var actions = Object.freeze({
	navigate: navigate
});

var index$1 = {
  state: state$1,
  mutations,
  actions,
  namespaced: true
};



var storeModules = Object.freeze({
	system: index,
	navigation: index$1
});

function run() {
  return importModule('./bundles/vendor.js').then(({
    Vue,
    VueRouter,
    Vuex,
    routerSync
  }) => {
    Vue.use(VueRouter);
    Vue.use(Vuex);

    // Initialise the store
    init(Vuex);
    Object.keys(storeModules).forEach(path => {
      store.registerModule(path, storeModules[path]);
    });

    // Initialise the router
    init$1(VueRouter, store);
    // TODO: Register the routes

    // Default Bundle
    window.dispatchEvent(new CustomEvent('app-is-ready'));
    window._appIsReady = true;

    // Application Entry Point
    return SystemComponentAsync.then(component => {
      routerSync.sync(store, router);

      new Vue({
        router,
        store,
        render: h => h(component)
      }).$mount('#app');
    });
  }).then(() => 'App loaded');
}

export { run };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL3ZpZXdzL3N5c3RlbS9zeXN0ZW0uY29tcG9uZW50LnZ1ZSIsIi4uLy4uL3NyYy9hcHAvc3RvcmUuanMiLCIuLi8uLi9zcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS12aWV3LmNvbXBvbmVudC52dWUiLCIuLi8uLi9zcmMvYXBwL3ZpZXdzL3RlY2gvdGVjaC12aWV3LmNvbXBvbmVudC52dWUiLCIuLi8uLi9zcmMvYXBwL3ZpZXdzL2dyYXBoaWNzL2dyYXBoaWNzLXZpZXcuY29tcG9uZW50LnZ1ZSIsIi4uLy4uL3NyYy9hcHAvdmlld3MvY3YvY3Ytdmlldy5jb21wb25lbnQudnVlIiwiLi4vLi4vc3JjL2FwcC9jb25zdGFudHMvbmF2aWdhdGlvbi5qcyIsIi4uLy4uL3NyYy9hcHAvcm91dGVyLmpzIiwiLi4vLi4vc3JjL2FwcC9jb25zdGFudHMvc3lzdGVtLmpzIiwiLi4vLi4vc3JjL2FwcC9zdG9yZS9zeXN0ZW0vc3RhdGUuanMiLCIuLi8uLi9zcmMvYXBwL3N0b3JlL3N5c3RlbS9pbmRleC5qcyIsIi4uLy4uL3NyYy9hcHAvc3RvcmUvbmF2aWdhdGlvbi9zdGF0ZS5qcyIsIi4uLy4uL3NyYy9hcHAvc3RvcmUvbmF2aWdhdGlvbi9tdXRhdGlvbnMuanMiLCIuLi8uLi9zcmMvYXBwL3N0b3JlL25hdmlnYXRpb24vYWN0aW9ucy5qcyIsIi4uLy4uL3NyYy9hcHAvc3RvcmUvbmF2aWdhdGlvbi9pbmRleC5qcyIsIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8c2VjdGlvbiBjbGFzcz1cInN5c3RlbS1jb21wb25lbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJfb25OYXZpZ2F0ZUJ1dHRvbkNsaWNrXCI+TmF2aWdhdGUgdG8gYSBuZXcgcGxhY2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XG4gICAgICB7eyBjdXJyZW50VmlldyB9fVxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxubGV0IFN5c3RlbUNvbXBvbmVudDtcbmV4cG9ydCBkZWZhdWx0IFN5c3RlbUNvbXBvbmVudCA9IHtcbiAgbmFtZTogJ2FwcCcsXG4gIG1ldGhvZHM6IHtcbiAgICBfb25OYXZpZ2F0ZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgY29uc29sZS5sb2coJ0NsaWNrZWQhJyk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBTeXN0ZW1Db21wb25lbnRBc3luYyA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIGltcG9ydE1vZHVsZSgnLi9idW5kbGVzL3ZlbmRvci5qcycpXG4gICAgLnRoZW4oKHsgVnVleCB9KSA9PiB7XG4gICAgICBjb25zdCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gPSBWdWV4O1xuXG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgLi4uU3lzdGVtQ29tcG9uZW50LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgLi4ubWFwU3RhdGUoJ25hdmlnYXRpb24nLCBbJ2N1cnJlbnRWaWV3J10pLFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAuLi5TeXN0ZW1Db21wb25lbnQubWV0aG9kcyxcbiAgICAgICAgICAuLi5tYXBBY3Rpb25zKCduYXZpZ2F0aW9uJywgWyduYXZpZ2F0ZSddKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzdHlsdXNcIj5cbiAgLy8gR2xvYmFsIFN0eWxlc2hlZXRcbiAgQHJlcXVpcmUgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXgnO1xuXG4gIC5zeXN0ZW0tY29tcG9uZW50IHtcbiAgICBncmlkKCk7XG5cbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtd2Vhay1hbHBoYTtcblxuICAgIC5oZWFkZXIge1xuICAgICAgY2VsbCgxLCAxLCAnY2VudGVyJywgMCk7XG4gICAgICBncmlkKCk7XG5cbiAgICAgIGgxLCBidXR0b24ge1xuICAgICAgICBjZWxsKDEsIDIsICdjZW50ZXInKTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAkc2l6ZS1sYXJnZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9keSB7XG4gICAgICBjZWxsKDEsIDEsLCAwKTtcbiAgICAgIGdyaWQoKTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJleHBvcnQgbGV0IHN0b3JlO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdChWdWV4KSB7XG4gIHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0cmljdDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcbiAgfSk7XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaG9tZS12aWV3LWNvbXBvbmVudFwiPlxuXG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnaG9tZS12aWV3JyxcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInN0eWx1c1wiPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8c2VjdGlvbiBjbGFzcz1cInRlY2gtdmlldy1jb21wb25lbnRcIj5cblxuICA8L3NlY3Rpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3RlY2gtdmlldycsXG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzdHlsdXNcIj5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJncmFwaGljcy12aWV3LWNvbXBvbmVudFwiPlxuXG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZ3JhcGhpY3MtdmlldycsXG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzdHlsdXNcIj5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHNlY3Rpb24gY2xhc3M9XCJjdi12aWV3LWNvbXBvbmVudFwiPlxuXG4gIDwvc2VjdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnY3YtdmlldycsXG4gIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzdHlsdXNcIj5cblxuPC9zdHlsZT5cbiIsImltcG9ydCBIb21lVmlld0NvbXBvbmVudCBmcm9tICcuLi92aWV3cy9ob21lL2hvbWUtdmlldy5jb21wb25lbnQudnVlJztcbmltcG9ydCBUZWNoVmlld0NvbXBvbmVudCBmcm9tICcuLi92aWV3cy90ZWNoL3RlY2gtdmlldy5jb21wb25lbnQudnVlJztcbmltcG9ydCBHcmFwaGljc1ZpZXdDb21wb25lbnQgZnJvbSAnLi4vdmlld3MvZ3JhcGhpY3MvZ3JhcGhpY3Mtdmlldy5jb21wb25lbnQudnVlJztcbmltcG9ydCBDdlZpZXdDb21wb25lbnQgZnJvbSAnLi4vdmlld3MvY3YvY3Ytdmlldy5jb21wb25lbnQudnVlJztcblxuZXhwb3J0IGNvbnN0IFZJRVdTID0ge1xuICBIT01FOiB7XG4gICAgbmFtZTogJ0hPTUUnLFxuICAgIHBhdGg6ICcvaG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lVmlld0NvbXBvbmVudCxcbiAgICB0aXRsZTogJ0hvbWUnLFxuICB9LFxuICBURUNIOiB7XG4gICAgbmFtZTogJ1RFQ0gnLFxuICAgIHBhdGg6ICcvdGVjaCcsXG4gICAgY29tcG9uZW50OiBUZWNoVmlld0NvbXBvbmVudCxcbiAgICB0aXRsZTogJ1RlY2gnLFxuICB9LFxuICBHUkFQSElDUzoge1xuICAgIG5hbWU6ICdHUkFQSElDUycsXG4gICAgcGF0aDogJy9ncmFwaGljcycsXG4gICAgY29tcG9uZW50OiBHcmFwaGljc1ZpZXdDb21wb25lbnQsXG4gICAgdGl0bGU6ICdHcmFwaGljcycsXG4gIH0sXG4gIENWOiB7XG4gICAgbmFtZTogJ0NWJyxcbiAgICBwYXRoOiAnL2N2JyxcbiAgICBjb21wb25lbnQ6IEN2Vmlld0NvbXBvbmVudCxcbiAgICB0aXRsZTogJ0NWJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPVVRFID0gVklFV1MuSE9NRTtcbiIsImltcG9ydCAqIGFzIG5hdmlnYXRpb25Db250cyBmcm9tICcuL2NvbnN0YW50cy9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGxldCByb3V0ZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KFZ1ZVJvdXRlcikge1xuICByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICByb3V0ZXM6IF9tYXBSb3V0ZUNvbnN0cyhuYXZpZ2F0aW9uQ29udHMuVklFV1MpLFxuICB9KTtcblxuICByb3V0ZXIucHVzaCh7IG5hbWU6IG5hdmlnYXRpb25Db250cy5ERUZBVUxUX1JPVVRFLm5hbWUgfSk7XG59XG5cbi8vIC0tLSBQcml2YXRlIC0tLVxuZnVuY3Rpb24gX21hcFJvdXRlQ29uc3RzKHZpZXdDb25zdHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZpZXdDb25zdHMpLm1hcCgodmlld0NvbnN0S2V5KSA9PiB7XG4gICAgY29uc3Qgdmlld0NvbnN0ID0gdmlld0NvbnN0c1t2aWV3Q29uc3RLZXldO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHZpZXdDb25zdC5uYW1lLFxuICAgICAgcGF0aDogdmlld0NvbnN0LnBhdGgsXG4gICAgICBjb21wb25lbnQ6IHZpZXdDb25zdC5jb21wb25lbnQsXG4gICAgfTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgVEhFTUVTID0ge1xuICBEQVJLOiAnREFSSycsXG4gIExJR0hUOiAnTElHSFQnLFxuICBSRUQ6ICdSRUQnLFxuICBCTFVFOiAnQkxVRScsXG59O1xuIiwiaW1wb3J0ICogYXMgY29uc3RzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zeXN0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRoZW1lOiBjb25zdHMuVEhFTUVTLkRBUkssXG59O1xuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBuYW1lc3BhY2VkOiB0cnVlLFxufTtcbiIsImltcG9ydCAqIGFzIGNvbnN0cyBmcm9tICcuLi8uLi9jb25zdGFudHMvbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3VycmVudFZpZXc6IGNvbnN0cy5WSUVXUy5IT01FLFxuICBhdmFpbGFibGVWaWV3czogW10sXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRWaWV3KHN0YXRlLCBuZXdWaWV3KSB7XG4gIC8vIFRPRE86IEFkZCBwYXJhbSBhc3NlcnRpb25cblxuICBpZiAoc3RhdGUubmF2aWdhdGlvbikge1xuICAgIHN0YXRlLm5hdmlnYXRpb24uY3VycmVudFZpZXcgPSBuZXdWaWV3O1xuICB9XG59XG4iLCJpbXBvcnQgeyBWSUVXUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9uYXZpZ2F0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKHsgY29tbWl0IH0sIGRlc3RpbmF0aW9uKSB7XG4gIGlmICghKGRlc3RpbmF0aW9uIGluIFZJRVdTKSkge1xuICAgIGNvbnNvbGUud2FybihgVmlldyAnJHtkZXN0aW5hdGlvbn0nIGRvZXMgbm90IGV4aXN0IWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbW1pdCgnc2V0Q3VycmVudFZpZXcnLCBWSUVXU1tkZXN0aW5hdGlvbl0pO1xufVxuIiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgbXV0YXRpb25zLFxuICBhY3Rpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlLFxufTtcbiIsImltcG9ydCB7IFN5c3RlbUNvbXBvbmVudEFzeW5jIH0gZnJvbSAnLi92aWV3cy9zeXN0ZW0vc3lzdGVtLmNvbXBvbmVudC52dWUnO1xuaW1wb3J0IHsgc3RvcmUsIGluaXQgYXMgaW5pdFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyByb3V0ZXIsIGluaXQgYXMgaW5pdFJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcbmltcG9ydCAqIGFzIHN0b3JlTW9kdWxlcyBmcm9tICcuL3N0b3JlL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bigpIHtcbiAgcmV0dXJuIGltcG9ydE1vZHVsZSgnLi9idW5kbGVzL3ZlbmRvci5qcycpXG4gICAgLnRoZW4oKHtcbiAgICAgIFZ1ZSxcbiAgICAgIFZ1ZVJvdXRlcixcbiAgICAgIFZ1ZXgsXG4gICAgICByb3V0ZXJTeW5jLFxuICAgIH0pID0+IHtcbiAgICAgIFZ1ZS51c2UoVnVlUm91dGVyKTtcbiAgICAgIFZ1ZS51c2UoVnVleCk7XG5cbiAgICAgIC8vIEluaXRpYWxpc2UgdGhlIHN0b3JlXG4gICAgICBpbml0U3RvcmUoVnVleCk7XG4gICAgICBPYmplY3Qua2V5cyhzdG9yZU1vZHVsZXMpLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUocGF0aCwgc3RvcmVNb2R1bGVzW3BhdGhdKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJbml0aWFsaXNlIHRoZSByb3V0ZXJcbiAgICAgIGluaXRSb3V0ZXIoVnVlUm91dGVyLCBzdG9yZSk7XG4gICAgICAvLyBUT0RPOiBSZWdpc3RlciB0aGUgcm91dGVzXG5cbiAgICAgIC8vIERlZmF1bHQgQnVuZGxlXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FwcC1pcy1yZWFkeScpKTtcbiAgICAgIHdpbmRvdy5fYXBwSXNSZWFkeSA9IHRydWU7XG5cbiAgICAgIC8vIEFwcGxpY2F0aW9uIEVudHJ5IFBvaW50XG4gICAgICByZXR1cm4gU3lzdGVtQ29tcG9uZW50QXN5bmMudGhlbigoY29tcG9uZW50KSA9PiB7XG4gICAgICAgIHJvdXRlclN5bmMuc3luYyhzdG9yZSwgcm91dGVyKTtcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByb3V0ZXIsXG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgcmVuZGVyOiBoID0+IGgoY29tcG9uZW50KSxcbiAgICAgICAgfSkuJG1vdW50KCcjYXBwJyk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+ICdBcHAgbG9hZGVkJyk7XG59XG4iXSwibmFtZXMiOlsiU3lzdGVtQ29tcG9uZW50IiwicmVuZGVyIiwibG9nIiwiU3lzdGVtQ29tcG9uZW50QXN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJWdWV4IiwibWFwU3RhdGUiLCJtYXBBY3Rpb25zIiwibWV0aG9kcyIsInN0b3JlIiwiaW5pdCIsIlN0b3JlIiwiVklFV1MiLCJIb21lVmlld0NvbXBvbmVudCIsIlRlY2hWaWV3Q29tcG9uZW50IiwiR3JhcGhpY3NWaWV3Q29tcG9uZW50IiwiQ3ZWaWV3Q29tcG9uZW50IiwiREVGQVVMVF9ST1VURSIsIkhPTUUiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJfbWFwUm91dGVDb25zdHMiLCJuYXZpZ2F0aW9uQ29udHMiLCJwdXNoIiwibmFtZSIsInZpZXdDb25zdHMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidmlld0NvbnN0S2V5Iiwidmlld0NvbnN0IiwicGF0aCIsImNvbXBvbmVudCIsIlRIRU1FUyIsImNvbnN0cyIsIkRBUksiLCJzZXRDdXJyZW50VmlldyIsInN0YXRlIiwibmV3VmlldyIsIm5hdmlnYXRpb24iLCJjdXJyZW50VmlldyIsIm5hdmlnYXRlIiwiY29tbWl0IiwiZGVzdGluYXRpb24iLCJ3YXJuIiwicnVuIiwiaW1wb3J0TW9kdWxlIiwidXNlIiwic3RvcmVNb2R1bGVzIiwiZm9yRWFjaCIsInJlZ2lzdGVyTW9kdWxlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiX2FwcElzUmVhZHkiLCJzeW5jIiwiVnVlIiwiaCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBSUEsZUFBSjtBQUNBLEFBQWVBLGtCQUFrQixFQUFDQzs7R0FBRCxxQkFBQTtRQUN6QixLQUR5QjtXQUV0Qjs2QkFDa0I7Y0FDZkMsR0FBUixDQUFZLFVBQVo7OztDQUpOOztBQVNBLEFBQU8sTUFBTUMsdUJBQXVCLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhO2VBQzlDLHFCQUFiLEVBQ0dDLElBREgsQ0FDUSxDQUFDLEVBQUVDLElBQUYsRUFBRCxLQUFjO1VBQ1osRUFBRUMsUUFBRixFQUFZQyxVQUFaLEtBQTJCRixJQUFqQzs7eUJBR0tQLGVBREw7OzZCQUlPUSxTQUFTLFlBQVQsRUFBdUIsQ0FBQyxhQUFELENBQXZCLENBREwsQ0FIRjs7NEJBUU9SLGdCQUFnQlUsT0FEckIsRUFFS0QsV0FBVyxZQUFYLEVBQXlCLENBQUMsVUFBRCxDQUF6QixDQUZMOztHQVhOO0NBRGtDLENBQTdCOztBQ3hCQSxJQUFJRSxLQUFKOztBQUVQLEFBQU8sU0FBU0MsSUFBVCxDQUFjTCxJQUFkLEVBQW9CO1VBQ2pCLElBQUlBLEtBQUtNLEtBQVQsQ0FBZTtZQUNiLGtCQUF5QjtHQUQzQixDQUFSOzs7QUNJRix3QkFBZSxFQUFDWjs7R0FBRCxxQkFBQTtRQUNQO0NBRFI7O0FDQUEsd0JBQWUs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
