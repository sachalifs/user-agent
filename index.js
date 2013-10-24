/**
 * Module dependecies
 */

var inherit = require('inherit');
var ua = navigator.userAgent.toLowerCase();

/**
 * Expose IE constructor
 */

exports.ie = IE;

/**
 * Creates an IE instance
 */

function IE() {
  if (!this instanceof IE) {
  	return new IE();
  }
  
  this.name = 'Internet Explorer';
  this.uaname = 'msie';
  this.version = ua.indexOf('msie') != -1 ? parseInt(ua.split('msie')[1]) : false;
}

/**
 * Inherits IE from Query
 */

inherit(IE, Query);

/**
 * Creates Query class
 */

function Query () {}

Query.prototype.lt = function(version) {
  return this.version && this.version < version;
};

Query.prototype.lte = function(version) {
  return this.version && this.version <= version;
};

Query.prototype.gt = function(version) {
  return this.version && this.version > version;
};

Query.prototype.gte = function(version) {
  return this.version && this.version >= version;
};

Query.prototype.eq = function(version) {
  return this.version && this.version == version;
};