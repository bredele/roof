
/**
 * Expose 'Element'
 */

module.exports = Element;


/**
 * Element constructor.
 * @api public
 */

function Element(tag) {
  this.localName = tag;
}

Element.prototype.appendChild = function(child) {
	return child;
};

Element.prototype.render = function() {
	var key = this.localName + '>';
	return '<' + key + '</' + key;
};