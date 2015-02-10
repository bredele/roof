
/**
 * Expose 'Node'
 */

module.exports = Node;


/**
 * Node constructor.
 * @api public
 */

function Node(type, name) {
  this.nodeType = type;
  this.localName = name;
  this.childNodes = [];
}


/**
 * Append child node (element or text
 * node).
 * 
 * @param  {Element | Text} child 
 * @return {Element} child
 * @api public
 */

Node.prototype.appendChild = function(child) {
	this.childNodes.push(child);
	child.parentNode = this;
	return child;
};


Node.prototype.replaceChild = function(child, old) {
  var index = this.childNodes.indexOf(old);
  if(!~index) return;
  this.childNodes.splice(index, 1, child);
  return old;
};


/**
 * Return element first child.
 *
 * @note should we use define getter
 * or object property?
 * 
 * @return {Element | Text}
 * @api public
 */

Node.prototype.__defineGetter__('firstChild', function () {
  return this.childNodes[0];
});


/**
 * Return next element sibling
 * if exists.
 * 
 * @return {Element | Text}
 * @api public
 */

Node.prototype.__defineGetter__('nextSibling', function () {
  // todo: we should avoid exception if parentNode undefined
  var nodes = this.parentNode.childNodes;
  var idx = nodes.indexOf(this);
  return nodes[idx + 1];
});

