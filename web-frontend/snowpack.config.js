/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  packageOptions: {
    rollup: {
      plugins: ['rollup-plugin-node-polyfills'],
    },
    polyfillNode: true,
  },
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 5000,
  },
  buildOptions: {
    /* ... */
  },
};
