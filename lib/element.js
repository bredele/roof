/**
 * Module dependencies.
 */

var Node = require('./node');
var NamedNodeMap = require('./namednodemap');
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
  Node.call(this, 1, tag);
  this.attributes = new NamedNodeMap();
}


Element.prototype = Object.create(Node.prototype);


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
  this.attributes.setNamedItem(attr);
};


/**
 * Get attribute.
 * 
 * @param {String} name
 * @api public
 */

Element.prototype.getAttribute = function(name) {
  var index = this.attributes.items.indexOf(name);
  console.log(this.attributes[index]);
  return this.attributes[index].nodeValue;
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
  for(var i = 0, l = this.childNodes.length; i < l; i++) {
    result += this.childNodes[i].render();
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
  for(var i = 0, l = attributes.length; i < l; i++) {
    tag = tag + ' ' + attributes[i].render();
  }
  return tag;
}
