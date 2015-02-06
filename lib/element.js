
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

Element.prototype.render = function() {
	return '<' + this.localName + '>' + '</' + this.localName + '>';
};