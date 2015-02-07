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
 * Element interface.
 *
 * Represents an object of a document.
 * 
 * @param {String} tag
 * @api public
 */

function Element(tag) {
  this.localName = tag;
  this.children = [];
  // note: attributes should be an array like
  // we should use Map
  this.attributes = new NamedNodeMap();
}

function NamedNodeMap() {

}

NamedNodeMap.prototype.setNamedItem = function(attr) {
  this[attr.localName] = attr;
};

/**
 * Set attribute.
 * 
 * @param {String} name
 * @param {Any} value
 * @api public
 */

Element.prototype.setAttribute = function(name, value) {
	var attr = new Attribute(name);
	attr.appendChild(new Text(value));
	this.attributes[name] = attr;
};


/**
 * Append child node (element or text
 * node).
 * 
 * @param  {Element | Text} child 
 * @return {Element} child
 * @api public
 */

Element.prototype.appendChild = function(child) {
	this.children.push(child);
	return child;
};


/**
 * Render string element.
 * 
 * @return {String}
 * @api private
 */

Element.prototype.render = function() {
	var key = attrs(this.localName, this.attributes) + '>';
	var result = '<' + key;
	for(var i = 0, l = this.children.length; i < l; i++) {
		result += this.children[i].render();
	}
	result += '</' + this.localName + '>';
	return result;
};


/**
 * Render attributes node list
 * into string.
 * 
 * @param  {String} tag 
 * @param  {Array} attributes
 * @return {String}
 * @api private
 */

function attrs(tag, attributes) {
	var arr = Object.keys(attributes);
	var length = arr.length;
	if(length) {
		for(var i = 0; i < length; i++) {
			tag = tag + ' ' + attributes[arr[i]].render();
		}
	}
	return tag;
}
