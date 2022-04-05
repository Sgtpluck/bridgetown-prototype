const uswds = require("@uswds/compile");

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.dist.theme = './frontend/_theme'
uswds.paths.dist.css = './frontend/uswds/css';
uswds.paths.dist.sass = './frontend/sass';
uswds.paths.dist.fonts =  './frontend/uswds/fonts'
uswds.paths.dist.js =  './frontend/uswds/js'
// images are served out of the `/src` directory
uswds.paths.dist.img =  './src/images/uswds/img'

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;