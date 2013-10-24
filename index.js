var ua = navigator.userAgent.toLowerCase();
var inherit = require('inherit');

exports.ie = IE;

function IE() {
  if (!this instanceof IE) return new IE();
  this.name = 'Internet Explorer';
  this.uaname = 'msie';
  this.version = myNav.indexOf('msie') != -1 ? parseInt(myNav.split('msie')[1]) : false;
}

inherit(IE, Query);

function Query () {}

Query.prototype.lt = function(version) {
  return this.version && this.version < version;
};

Query.prototype.lte = function(version) {
  return this.version && this.version <= version;
};

Query.prototype.is = function(version) {
  return this.version && this.version == version;
};