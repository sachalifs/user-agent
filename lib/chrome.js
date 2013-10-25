/**
 * Module dependecies
 */

var inherit = require('inherit');
var Query = require('./query');
var ua = navigator.userAgent.toLowerCase();

/**
 * Expose Chrome constructor
 */

module.exports = Chrome;

/**
 * Creates an Chrome instance
 */

function Chrome() {
  if (!(this instanceof Chrome)) {
  	return new Chrome();
  }
  
  this.name = 'Google Chrome';
  this.uaname = 'chrome';
  this.version = ua.indexOf(this.uaname) != -1 ? parseInt(ua.split(this.uaname + "/")[1]) : false;
}

/**
 * Inherits Chrome from Query
 */

inherit(Chrome, Query);