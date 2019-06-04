require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');


module.exports = withCSS(withSass({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
}));

// https://github.com/zeit/next.js/tree/canary/examples/with-dotenv
// https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// https://github.com/zeit/next-plugins/tree/master/packages/next-sass
// https://github.com/zeit/next-plugins/tree/master/packages/next-css
