
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


/**
 * Render string text.
 * 
 * @return {String}
 * @api private
 */

Text.prototype.render = function() {
  return this.nodeValue;
};