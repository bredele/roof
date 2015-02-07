
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
  this.children = [];
}

Element.prototype.setAttribute = function(name, value) {
	
};


Element.prototype.appendChild = function(child) {
	this.children.push(child);
	return child;
};

Element.prototype.render = function() {
	var key = this.localName + '>';
	var result = '<' + key;
	for(var i = 0, l = this.children.length; i < l; i++) {
		result += this.children[i].render();
	}
	result += '</' + key;
	return result;
};