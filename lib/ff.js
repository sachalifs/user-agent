/**
 * Module dependecies
 */

var inherit = require('inherit');
var Query = require('./query');
var ua = navigator.userAgent.toLowerCase();

/**
 * Expose FF constructor
 */

module.exports = FF;

/**
 * Creates an FF instance
 */

function FF() {
  if (!(this instanceof FF)) {
  	return new FF();
  }
  
  this.name = 'Mozilla Firefox';
  this.uaname = 'firefox';
  this.version = ua.indexOf(this.uaname) != -1 ? parseInt(ua.split(this.uaname + "/")[1]) : false;
}

/**
 * Inherits FF from Query
 */

inherit(FF, Query);