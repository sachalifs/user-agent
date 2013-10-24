/**
 * Module dependecies
 */

var inherit = require('inherit');
var Query = require('./query');
var ua = navigator.userAgent.toLowerCase();

/**
 * Expose IE constructor
 */

module.exports = IE;

/**
 * Creates an IE instance
 */

function IE() {
  if (!(this instanceof IE)) {
  	return new IE();
  }
  
  this.name = 'Internet Explorer';
  this.uaname = 'msie';
  this.version = ua.indexOf(this.uaname) != -1 ? parseInt(ua.split(this.uaname)[1]) : false;
}

/**
 * Inherits IE from Query
 */

inherit(IE, Query);