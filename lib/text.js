
/**
 * Expose 'Text'
 */

module.exports = Text;


/**
 * Text constructor.
 * @api public
 */

function Text(str) {
	this.nodeType = 3;
  this.nodeValue = str.toString();
}


Text.prototype.__defineGetter__('nextSibling', function () {
  var nodes = this.parentNode.childNodes;
  var idx = nodes.indexOf(this);
  return nodes[idx + 1];
});


/**
 * Render string text.
 * 
 * @return {String}
 * @api private
 */

Text.prototype.render = function() {
  return this.nodeValue;
};