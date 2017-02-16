/* app-bootstrap-bundle.es6 */
/* global DocumentTouch: false */
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const PREFIXES = ' -webkit- -moz- -o- -ms- '.split(' ');
const polyfills = [];

const featChecks = {
  customElements: () => 'customElements' in window,
  htmlImports: () => 'import' in document.createElement('link'),
  shadowDom: () => 'createShadowRoot' in document.head,
  mutationObserver: () => !!window.MutationObserver || !!window.WebKitMutationObserver,
  weakMap: () => 'WeakMap' in window,
  parentNodePrepend: () => 'prepend' in document.createElement('div'),
};

const polyLoads = {
  webcomponentsjs() {
    const script = document.createElement('script');
    script.async = false;
    if (process.env.NODE_ENV === PRODUCTION) {
      // TODO: Checkup to see why the minified files are not in bower
      script.src = 'bower_components/webcomponentsjs/webcomponents.min.js';
    } else {
      script.src = 'bower_components/webcomponentsjs/webcomponents.js';
    }
    document.head.appendChild(script);
  },
  'webcomponentsjs-lite': () => {
    const script = document.createElement('script');
    script.async = false;
    if (process.env.NODE_ENV === PRODUCTION) {
      // TODO: Checkup to see why the minified files are not in bower
      script.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
    } else {
      script.src = 'bower_components/webcomponentsjs/webcomponents-lite.js';
    }
    document.head.appendChild(script);
  },
  parentNodePrepend() {
    (function (arr) {
      arr.forEach(function (item) {
        item.prepend = item.prepend || function () {
          const argArr = Array.prototype.slice.call(arguments);
          const docFrag = document.createDocumentFragment();

          argArr.forEach(function (argItem) {
            const isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.insertBefore(docFrag, this.firstChild);
        };
      });
    }([Element.prototype, Document.prototype, DocumentFragment.prototype]));
  },
};

/**
 * Trigger main application configuration and load upon bootstrap completion
 * @param  {function} configCallback The function to execute. Is intended to be the function that triggers application config/load
 */
window._boot = (configCallback) => {
  if (polyfills.includes('webcomponentsjs') || polyfills.includes('webcomponents-lite')) {
    window.addEventListener('WebComponentsReady', _onWebcomponentsReady.bind(configCallback));
  } else if (configCallback) {
    configCallback();
  }
};

function bootstrap() {
  setEnv();
  detectUA();
  loadPolyfills();

  console.info('Application Bootstrap Complete');
}

// === Private ===
function detectUA() {
  window._isMobile = _isMobile();
  window._isTouchEnabled = _isTouchEnabled();
}

function setEnv() {
  window.process = window.process || { env: { NODE_ENV: DEVELOPMENT } };
  window.process.env = window.process.env || { NODE_ENV: DEVELOPMENT };
  window.process.env.NODE_ENV = window.process.env.NODE_ENV || DEVELOPMENT;
}

function loadPolyfills() {
  // // webcomponentsjs
  // if (!featChecks.shadowDom()) {
  //   _loadPolyfill('webcomponentsjs');
  // } else {
  //   const requiresWcjsLite = [
  //     'htmlImports',
  //     'mutationObserver',
  //     'weakMap',
  //   ].some(feat => !featChecks[feat]());

  //   if (requiresWcjsLite) {
  //     _loadPolyfill('webcomponentsjs-lite');
  //   }
  // }

  // Element.prototype.prepend()
  if (!featChecks.parentNodePrepend) {
    _loadPolyfill('parentNodePrepend');
  }

  // Report loaded polyfills
  if (polyfills.length !== 0) {
    console.info('Polyfills loaded:', polyfills);
  }
}

function _isMobile() {
  const re = /Mobi/i; // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
  return re.test(navigator.userAgent);
}

function _isTouchEnabled() {
  // NOTE: This check does not imply that the browser is "touch-only". There is no way to detect that (http://www.stucox.com/blog/you-cant-detect-a-touchscreen/)
  let bool;
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    bool = true;
  } else {
    const query = [
      '@media (', PREFIXES.join('touch-enabled),('),
      'heartz', ')',
      '{#modernizr{top:9px;position:absolute}}']
        .join('');
    _injectElementWithStyles(query, (node) => {
      bool = node.offsetTop === 9;
    });
  }
  return bool;
}

function _loadPolyfill(name) {
  if (!polyfills.includes(name)) {
    polyfills.push(name);

    try {
      polyLoads[name]();
    } catch (e) {
      console.error(`Loading polyfill '${name}' failed with error:`, e);
    }
  }
}

function _onWebcomponentsReady() {
  console.info('Webcomponents Ready');
  window.removeEventListener('WebComponentsReady', _onWebcomponentsReady.bind(configCallback));
}

/**
 * Obtained and modified from https://github.com/Modernizr/Modernizr/blob/master/src/getBody.js
 */
function _getBody() {
  let body = document.body;

  if (!body) {
    body = document.createElement('body');
    body.fake = true;
  }

  return body;
}

/**
 * Obtained and modified from https://github.com/Modernizr/Modernizr/blob/master/src/injectElementWithStyles.js
 */
function _injectElementWithStyles(rule, callback, nodes, testnames) {
  const mod = 'modernizr';
  let node;
  let docOverflow;
  const docElement = document.documentElement;
  const div = document.createElement('div');
  const body = _getBody();

  if (parseInt(nodes, 10)) {
    while (nodes--) {
      node = document.createElement('div');
      node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
      div.appendChild(node);
    }
  }

  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = `s${mod}`;

  (!body.fake ? div : body).appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(document.createTextNode(rule));
  }
  div.id = mod;

  if (body.fake) {
    body.style.background = '';
    body.style.overflow = 'hidden';
    docOverflow = docElement.style.overflow;
    docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  const ret = callback(div, rule);
  if (body.fake) {
    body.parentNode.removeChild(body);
    docElement.style.overflow = docOverflow;
    // eslint-disable-next-line
    docElement.offsetHeight;
  } else {
    div.parentNode.removeChild(div);
  }

  return !!ret;
}

// Start the bootstrap
bootstrap();
