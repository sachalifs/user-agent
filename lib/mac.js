/**
 * Module dependecies
 */

var inherit = require('inherit');
var Query = require('./query');
var ua = navigator.userAgent;

/**
 * Expose MacOS constructor
 */

module.exports = MacOS;

/**
 * Creates an Mac instance
 */

function MacOS() {
  if (!(this instanceof MacOS)) {
  	return new MacOS();
  }
  
  this.name = 'Mac OS';
  this.uaname = 'mac os';
  var match = ua.match(/mac os ([^)]+)\)/i);
  this.version = match ? 'OS ' + match[1] : false;
}

/**
 * Inherits MacOS from Query
 */

inherit(MacOS, Query);