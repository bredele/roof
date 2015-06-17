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
	// @note outerHTML doesn't exist on text node
  this.nodeValue = str.toString();
}


Text.prototype = Object.create(Node.prototype);


Object.defineProperty(Text.prototype, "outerHTML", 
  {
    get: function() {
    	return this.nodeValue;
    },
    enumerable : true,
    configurable : true
  }
);
