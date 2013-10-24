/**
 * Expose Query constructor
 */

module.exports = Query;

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