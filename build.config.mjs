// production mode
const productionMode = process.env.NODE_ENV === 'production';
// sourceMaps - default is inline for developement, none in production
const sourceMaps = productionMode ? false : 'inline';
// const sourceMaps = !productionMode;
// const sourceMaps = false;

export default {
  //
  // common config section
  //

  // build incrementally (default: true)
  incrementalBuilds: true,

  // optional: default false
  productionMode: process.env.NODE_ENV === 'production',

  // optional default 'inline' in dev mode, false in production
  sourceMaps,
  sourceMapsCSS: sourceMaps,

  // minify (when in production mode)
  minify: productionMode,

  // NOTE: all paths are relative to this config file

  // required: all build paths are relative to ./src
  src: 'src',

  // required: all output is relative to dest
  dest: 'dist',

  //
  // supported tasks
  //
  tasks: {
    // bundles task
    bundles: {
      //
      // non-overridable configs (per bundle)
      //

      // task type name
      type: 'bundle', // (default specified in configurator)

      // task specific dest (relative to config dest)
      dest: 'bundles',

      // configurator id
      configurator: 'rollup-bundle-configurator',

      // builder id
      builder: 'rollup-bundle-builder',

      // glob(s) of bundle dirs to consider (string|array)
      // optional: default '*' all first level subdirs of src
      globs: [
        'bootstrap',
        'app',
        'vendor',
      ],

      //
      // overridable configs (per bundle)
      //

      // bundle entry point file in globbed folders
      // optional: default 'index.js'
      entry: 'index.js',

      // glob(s) to 'calculate' dependencies relative to entry file
      // optional: default ['*.(js,es6)', '**/*.(js,es6)']
      deps: [
        '*.(js,vue,styl)',      // all these
        '**/*.(js,vue,styl)',   // all these
      ],

      // default list of module IDs to not rollup
      // and remain external to the bundle
      external: [
        'debug',
        'vue',
        'vuex',
        'vue-router',
      ],

      // defines the global name to use for a module
      globals: {
        // e.g. module_id: global_name
        // underscore: '_',
      },

      // per module config overrides for matched key from globbed bundle directories
      overrides: {
        app: {
          deps: [
            '*.js',
            '*.vue',
            '*.styl',
            '**/*.js',
            '**/*.vue',
            '**/*.styl',
          ],
        },
        bootstrap: {
          sourceMaps: false,
          pluginFlags: {
            babel: false,
          },
        },
        vendor: {
          sourceMaps: false,
          pluginFlags: {
            vue: false,
            json: false,
            replace: true,
            nodeResolve: true,
            commonJS: true,
            babel: false,
          },
          external: [],
        },
      },
    },

    // assets task
    assets: {
      type: 'asset',

      // configorator id
      configurator: 'file-copy-configurator',

      // builder id
      builder: 'file-copy-builder',

      // assets are dependants of index.html
      entry: 'index.html',

      // glob(s) of asset files copy
      deps: [
        '*.html',
        '*.(png,jpg,ico,svg)',
        'styles/*.css',
      ],
    },
  },
};
