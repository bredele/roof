/**
 * Module dependencies.
 */

var Node = require('./node');
var NamedNodeMap = require('./namednodemap');
var Attribute = require('./attribute');
var Text = require('./text');
var Parser = require('htmlparser2').Parser;


/**
 * A void element is an element
 * that does not need a closing
 * tag.
 * @type {Array}
 */

var voidElements = [
  'area',
  'base',
  'basefont',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'img',
  'input',
  'isindex',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
  'path',
  'circle',
  'ellipse',
  'line',
  'rect',
  'use',
  'stop',
  'polyline',
  'polygon'
];


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
 * Define setter and getter
 * for innerHTML property.
 */

Object.defineProperty(Element.prototype, "innerHTML", 
  {
    get: function() {
      var result = '';
      for(var i = 0, l = this.childNodes.length; i < l; i++) {
        // define property as fast as private render method?
        result += this.childNodes[i].outerHTML;
      }
      return result;
    },
    set : function(str) {
      innerHTML(this, str);
    },
    enumerable : true,
    configurable : true
  }
);


/**
 * Define setter and getter
 * for innerHTML property.
 */

Object.defineProperty(Element.prototype, "outerHTML", 
  {
    get: function() {
      var key = attrs(this.localName, this.attributes);
      var result = '<' + key;
      if(voidElements.indexOf(this.localName) > -1) return result + '/>';
      result = result + '>';
      result += this.innerHTML;
      result += '</' + this.localName + '>';
      return result;
    },
    enumerable : true,
    configurable : true
  }
);


/**
 * Set srting as innerHTML
 * of an element.
 * 
 * @param  {Element} dom
 * @param  {String} str
 * @api private
 */

function innerHTML(dom, str) {
  var current = dom;
  var stack = [];
  var parser = new Parser({
    onopentag: function(name, attribs) {
      var el = new Element(name);
      stack.push(el);
      current = current.appendChild(el);
    },
    ontext: function(text) {
      current.appendChild(new Text(text));
    },
    onclosetag: function(name){
      stack.pop();
      current = stack[stack.length - 1];
    }
  }, {
    decodeEntities: true
  });
  parser.write(str);
  parser.end();
}


/**
 * Insert Adjacent HTML
 *
 * Example:
 *
 *   el.insertAdjacentHTML('beforeend', 'hello');
 *
 * @note it is a partial implementation that supports
 * only beforeend.
 * 
 * @param  {String} location
 * @param  {String} str
 * @api public
 */

Element.prototype.insertAdjacentHTML = function(location, str) {
  var frag = new Element('div');
  frag.innerHTML = str;
  this.appendChild(frag.firstChild);
};


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
  var attr = this.attributes.getNamedItem(name);
  if(!attr) return;
  var nodes = attr.childNodes;
  var result = '';
  for(var i = 0, l = nodes.length; i < l; i++) {
    result += nodes[i].nodeValue;
  }
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
    tag = tag + ' ' + attributes[i].outerHTML;
  }
  return tag;
}
