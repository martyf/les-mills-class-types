const mix = require("laravel-mix");

mix.js("dist/js/bard-class.js")
    .vue({version: 2})
    .webpackConfig(require('./webpack.config'))

mix.copy('resources/css', 'dist/css');
