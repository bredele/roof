/**
 * Module dependencies.
 */

var Attribute = require('./attribute');
var Text = require('./text');


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
  this.attributes = [];
}

Element.prototype.setAttribute = function(name, value) {
	var attr = new Attribute(name);
	attr.appendChild(new Text(value));
	this.attributes.push(attr);
};


Element.prototype.appendChild = function(child) {
	this.children.push(child);
	return child;
};

Element.prototype.render = function() {
	var key = attrs(this.localName, this.attributes) + '>';
	var result = '<' + key;
	for(var i = 0, l = this.children.length; i < l; i++) {
		result += this.children[i].render();
	}
	result += '</' + this.localName + '>';
	return result;
};

function attrs(tag, attributes) {
	var length = attributes.length;
	if(length) {
		for(var i = 0; i < length; i++) {
			tag = tag + ' ' + attributes[i].render();
		}
	}
	return tag;
}