
/**
 * Expose 'Attribute'
 */

module.exports = Attribute;


/**
 * Attribute constructor.
 * @api public
 */

function Attribute(name) {
  this.localName = name;
}


Attribute.prototype.render = function() {
	return this.localName + '=' + '""';
};