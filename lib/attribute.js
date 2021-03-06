/**
 * Module dependencies.
 */

var Node = require('./node');
var Text = require('./text');

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

Object.defineProperty(Attribute.prototype, "nodeValue", 
  {
    get: function() {
      var values = '';
      for(var i = 0, l = this.childNodes.length; i < l; i++) {
        values += this.childNodes[i].outerHTML;
      }
      return values;
    },
    set: function(str) {
      this.childNodes = [];
      this.appendChild(new Text(str));
    },
    enumerable : true,
    configurable : true
  }
);


/**
 * Render string attribute.
 * 
 * @return {String}
 * @api private
 */

Object.defineProperty(Attribute.prototype, "outerHTML", 
  {
    get: function() {
    	return this.localName + '="' + this.nodeValue + '"';
    },
    enumerable : true,
    configurable : true
  }
);
