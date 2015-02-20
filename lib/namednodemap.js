
/**
 * Expose 'NamedNodeMap'
 */

module.exports = NamedNodeMap;


/**
 * NamedNodeMap constructor.
 * @api public
 */

function NamedNodeMap() {
  this.items = [];
}

// note: is it faster than slice call?
NamedNodeMap.prototype = Object.create(Array.prototype);


/**
 * Set named node.
 *
 * @param {Node} node
 * @api public
 */

NamedNodeMap.prototype.setNamedItem = function(node) {
  var name = node.localName;
  var index = this.items.indexOf(name);
  if(index > -1) {
    this.splice(index, 1, node);
  } else {
    this.items.push(name);
    this.push(node);
  }
};


/**
 * Get named node.
 *
 * @param {Node} node
 * @api public
 */

NamedNodeMap.prototype.getNamedItem = function(name) {
	return this[this.items.indexOf(name)];
};