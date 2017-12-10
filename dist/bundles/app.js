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

let AppComponent;
AppComponent = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('h1', [_vm._v("Hello World")]);
  }, staticRenderFns: [],
  name: 'app'
};

const AppComponentAsync = new Promise(resolve => {
  resolve(_extends({}, AppComponent));
});

function run() {
  return importModule('./bundles/vendor.js').then(({
    Vue,
    VueRouter,
    Vuex
  }) => {
    const _router = new VueRouter({});
    Vue.use(VueRouter);
    Vue.use(Vuex);

    // Default Bundle
    window.dispatchEvent(new CustomEvent('app-is-ready'));
    window._appIsReady = true;

    // Application Entry Point
    return AppComponentAsync.then(component => {
      new Vue({
        router: _router,
        // store,
        render: h => h(component)
      }).$mount('#app');
    });
  }).then(() => 'App loaded');
}

export { run };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL3ZpZXdzL2FwcC9hcHAuY29tcG9uZW50LnZ1ZSIsIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxPkhlbGxvIFdvcmxkPC9oMT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5sZXQgQXBwQ29tcG9uZW50O1xuZXhwb3J0IGRlZmF1bHQgQXBwQ29tcG9uZW50ID0ge1xuICBuYW1lOiAnYXBwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBBcHBDb21wb25lbnRBc3luYyA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIHJlc29sdmUoe1xuICAgIC4uLkFwcENvbXBvbmVudCxcbiAgfSk7XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInN0eWx1c1wiPlxuLy8gR2xvYmFsIFN0eWxlc2hlZXRcbkByZXF1aXJlICcuLi8uLi9hc3NldHMvc3R5bGVzL2luZGV4Jztcbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBBcHBDb21wb25lbnRBc3luYyB9IGZyb20gJy4vdmlld3MvYXBwL2FwcC5jb21wb25lbnQudnVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bigpIHtcbiAgcmV0dXJuIGltcG9ydE1vZHVsZSgnLi9idW5kbGVzL3ZlbmRvci5qcycpXG4gICAgLnRoZW4oKHtcbiAgICAgIFZ1ZSxcbiAgICAgIFZ1ZVJvdXRlcixcbiAgICAgIFZ1ZXgsXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgX3JvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe30pO1xuICAgICAgVnVlLnVzZShWdWVSb3V0ZXIpO1xuICAgICAgVnVlLnVzZShWdWV4KTtcblxuICAgICAgLy8gRGVmYXVsdCBCdW5kbGVcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYXBwLWlzLXJlYWR5JykpO1xuICAgICAgd2luZG93Ll9hcHBJc1JlYWR5ID0gdHJ1ZTtcblxuICAgICAgLy8gQXBwbGljYXRpb24gRW50cnkgUG9pbnRcbiAgICAgIHJldHVybiBBcHBDb21wb25lbnRBc3luYy50aGVuKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgcm91dGVyOiBfcm91dGVyLFxuICAgICAgICAgIC8vIHN0b3JlLFxuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKGNvbXBvbmVudCksXG4gICAgICAgIH0pLiRtb3VudCgnI2FwcCcpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiAnQXBwIGxvYWRlZCcpO1xufVxuIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsInJlbmRlciIsIkFwcENvbXBvbmVudEFzeW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJydW4iLCJpbXBvcnRNb2R1bGUiLCJ0aGVuIiwiX3JvdXRlciIsIlZ1ZVJvdXRlciIsInVzZSIsIlZ1ZXgiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJfYXBwSXNSZWFkeSIsImNvbXBvbmVudCIsIlZ1ZSIsImgiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQUlBLFlBQUo7QUFDQSxBQUFlQSxlQUFlLEVBQUNDOztHQUFELHFCQUFBO1FBQ3RCO0NBRFI7O0FBSUEsQUFBTyxNQUFNQyxvQkFBb0IsSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7dUJBRW5ESixZQURMO0NBRCtCLENBQTFCOztBQ1JBLFNBQVNLLEdBQVQsR0FBZTtTQUNiQyxhQUFhLHFCQUFiLEVBQ0pDLElBREksQ0FDQyxDQUFDO09BQUE7YUFBQTs7R0FBRCxLQUlBO1VBQ0VDLFVBQVUsSUFBSUMsU0FBSixDQUFjLEVBQWQsQ0FBaEI7UUFDSUMsR0FBSixDQUFRRCxTQUFSO1FBQ0lDLEdBQUosQ0FBUUMsSUFBUjs7O1dBR09DLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixjQUFoQixDQUFyQjtXQUNPQyxXQUFQLEdBQXFCLElBQXJCOzs7V0FHT1osa0JBQWtCSyxJQUFsQixDQUF3QlEsU0FBRCxJQUFlO1VBQ3ZDQyxHQUFKLENBQVE7Z0JBQ0VSLE9BREY7O2dCQUdFUyxLQUFLQSxFQUFFRixTQUFGO09BSGYsRUFJR0csTUFKSCxDQUlVLE1BSlY7S0FESyxDQUFQO0dBZkcsRUF1QkpYLElBdkJJLENBdUJDLE1BQU0sWUF2QlAsQ0FBUDs7Ozs7In0=
