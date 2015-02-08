/**
 * Module dependencies.
 */

var Node = require('./node');


/**
 * Expose 'Text'
 */

module.exports = Text;


/**
 * Text constructor.
 * @api public
 */

function Text(str) {
	Node.call(this, 3);
  this.nodeValue = str.toString();
}


Text.prototype = Object.create(Node.prototype);


/**
 * Render string text.
 * 
 * @return {String}
 * @api private
 */

Text.prototype.render = function() {
  return this.nodeValue;
};