/**
 * Module dependencies.
 */

var Node = require('./node');


/**
 * Expose 'Attribute'
 */

module.exports = Attribute;


/**
 * Attribute interface.
 *
 * @param {String} name
 * @api public
 */

function Attribute(name) {
  Node.call(this, 2, name);
}


Attribute.prototype = Object.create(Node.prototype);


/**
 * Render string attribute.
 * 
 * @return {String}
 * @api private
 */

Object.defineProperty(Attribute.prototype, "outerHTML", 
  {
    get: function() {
    	var values = '';
    	for(var i = 0, l = this.childNodes.length; i < l; i++) {
    	  values += this.childNodes[i].outerHTML;
    	}
    	return this.localName + '="' + values + '"';
    },
    enumerable : true,
    configurable : true
  }
);
