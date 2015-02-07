
/**
 * Expose 'Text'
 */

module.exports = Text;


/**
 * Text constructor.
 * @api public
 */

function Text(str) {
  this.nodeValue = str;
}

Text.prototype.render = function() {
	return this.nodeValue;
};