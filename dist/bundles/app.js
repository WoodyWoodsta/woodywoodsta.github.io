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
    var _vm = this;return _vm._m(0, false, false);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('section', [_c('div', { staticClass: "container" }, [_c('h1', [_vm._v("Hello World")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis dignissimos expedita alias. Eveniet voluptatem expedita optio tenetur ut. Facere nostrum ab similique voluptas id odit nisi distinctio sapiente iure.")])]), _vm._v(" "), _c('div', { staticClass: "container" }, [_c('h1', [_vm._v("Hello World")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti debitis dignissimos expedita alias. Eveniet voluptatem expedita optio tenetur ut. Facere nostrum ab similique voluptas id odit nisi distinctio sapiente iure.")])])]);
  }],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL3ZpZXdzL2FwcC9hcHAuY29tcG9uZW50LnZ1ZSIsIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8c2VjdGlvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZW5pdGkgZGViaXRpcyBkaWduaXNzaW1vcyBleHBlZGl0YSBhbGlhcy4gRXZlbmlldCB2b2x1cHRhdGVtIGV4cGVkaXRhIG9wdGlvIHRlbmV0dXIgdXQuIEZhY2VyZSBub3N0cnVtIGFiIHNpbWlsaXF1ZSB2b2x1cHRhcyBpZCBvZGl0IG5pc2kgZGlzdGluY3RpbyBzYXBpZW50ZSBpdXJlLjwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZW5pdGkgZGViaXRpcyBkaWduaXNzaW1vcyBleHBlZGl0YSBhbGlhcy4gRXZlbmlldCB2b2x1cHRhdGVtIGV4cGVkaXRhIG9wdGlvIHRlbmV0dXIgdXQuIEZhY2VyZSBub3N0cnVtIGFiIHNpbWlsaXF1ZSB2b2x1cHRhcyBpZCBvZGl0IG5pc2kgZGlzdGluY3RpbyBzYXBpZW50ZSBpdXJlLjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmxldCBBcHBDb21wb25lbnQ7XG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQgPSB7XG4gIG5hbWU6ICdhcHAnLFxufTtcblxuZXhwb3J0IGNvbnN0IEFwcENvbXBvbmVudEFzeW5jID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgcmVzb2x2ZSh7XG4gICAgLi4uQXBwQ29tcG9uZW50LFxuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic3R5bHVzXCI+XG4gIC8vIEdsb2JhbCBTdHlsZXNoZWV0XG4gIEByZXF1aXJlICcuLi8uLi9hc3NldHMvc3R5bGVzL2luZGV4JztcblxuICBzZWN0aW9uIHtcbiAgICBncmlkKClcbiAgICArYmVsb3cocmVtLWNhbGMoYnJlYWtwb2ludHNbbWRdKSkge1xuICAgICAgZ3JpZCgnY29sdW1uJyk7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBjZWxsKDEsIDIpO1xuXG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtd2Vhay1hbHBoYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHBhZGRpbmc6ICRwYWRkaW5nLW5vcm1hbDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBBcHBDb21wb25lbnRBc3luYyB9IGZyb20gJy4vdmlld3MvYXBwL2FwcC5jb21wb25lbnQudnVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bigpIHtcbiAgcmV0dXJuIGltcG9ydE1vZHVsZSgnLi9idW5kbGVzL3ZlbmRvci5qcycpXG4gICAgLnRoZW4oKHtcbiAgICAgIFZ1ZSxcbiAgICAgIFZ1ZVJvdXRlcixcbiAgICAgIFZ1ZXgsXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgX3JvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe30pO1xuICAgICAgVnVlLnVzZShWdWVSb3V0ZXIpO1xuICAgICAgVnVlLnVzZShWdWV4KTtcblxuICAgICAgLy8gRGVmYXVsdCBCdW5kbGVcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYXBwLWlzLXJlYWR5JykpO1xuICAgICAgd2luZG93Ll9hcHBJc1JlYWR5ID0gdHJ1ZTtcblxuICAgICAgLy8gQXBwbGljYXRpb24gRW50cnkgUG9pbnRcbiAgICAgIHJldHVybiBBcHBDb21wb25lbnRBc3luYy50aGVuKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgcm91dGVyOiBfcm91dGVyLFxuICAgICAgICAgIC8vIHN0b3JlLFxuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKGNvbXBvbmVudCksXG4gICAgICAgIH0pLiRtb3VudCgnI2FwcCcpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiAnQXBwIGxvYWRlZCcpO1xufVxuIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsInJlbmRlciIsIkFwcENvbXBvbmVudEFzeW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJydW4iLCJpbXBvcnRNb2R1bGUiLCJ0aGVuIiwiX3JvdXRlciIsIlZ1ZVJvdXRlciIsInVzZSIsIlZ1ZXgiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJfYXBwSXNSZWFkeSIsImNvbXBvbmVudCIsIlZ1ZSIsImgiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLElBQUlBLFlBQUo7QUFDQSxBQUFlQSxlQUFlLEVBQUNDOztHQUFEOztJQUFBO1FBQ3RCO0NBRFI7O0FBSUEsQUFBTyxNQUFNQyxvQkFBb0IsSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7dUJBRW5ESixZQURMO0NBRCtCLENBQTFCOztBQ2pCQSxTQUFTSyxHQUFULEdBQWU7U0FDYkMsYUFBYSxxQkFBYixFQUNKQyxJQURJLENBQ0MsQ0FBQztPQUFBO2FBQUE7O0dBQUQsS0FJQTtVQUNFQyxVQUFVLElBQUlDLFNBQUosQ0FBYyxFQUFkLENBQWhCO1FBQ0lDLEdBQUosQ0FBUUQsU0FBUjtRQUNJQyxHQUFKLENBQVFDLElBQVI7OztXQUdPQyxhQUFQLENBQXFCLElBQUlDLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBckI7V0FDT0MsV0FBUCxHQUFxQixJQUFyQjs7O1dBR09aLGtCQUFrQkssSUFBbEIsQ0FBd0JRLFNBQUQsSUFBZTtVQUN2Q0MsR0FBSixDQUFRO2dCQUNFUixPQURGOztnQkFHRVMsS0FBS0EsRUFBRUYsU0FBRjtPQUhmLEVBSUdHLE1BSkgsQ0FJVSxNQUpWO0tBREssQ0FBUDtHQWZHLEVBdUJKWCxJQXZCSSxDQXVCQyxNQUFNLFlBdkJQLENBQVA7Ozs7OyJ9
