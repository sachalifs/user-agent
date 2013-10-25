/**
 * Module dependecies
 */

var inherit = require('inherit');
var Query = require('./query');
var ua = navigator.userAgent.toLowerCase();

/**
 * Expose Safari constructor
 */

module.exports = Safari;

/**
 * Creates an Safari instance
 */

function Safari() {
  if (!(this instanceof Safari)) {
  	return new Safari();
  }
  
  this.name = 'Safari';
  this.uaname = 'safari';
  this.version = ua.indexOf('chrome') == -1 && ua.indexOf(this.uaname) != -1 ? parseInt(ua.split(this.uaname + "/")[1]) : false;
}

/**
 * Inherits Safari from Query
 */

inherit(Safari, Query);