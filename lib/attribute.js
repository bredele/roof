
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
  this.localName = name;
  this.nodeType = 2;
  // childNodes should be a nodelist
  this.childNodes = [];
}


/**
 * Append child text node.
 * 
 * @param  {Text} child 
 * @return {Text} child
 * @api public
 */

Attribute.prototype.appendChild = function(child) {
  this.childNodes.push(child);
  return child;
};


/**
 * Render string attribute.
 * 
 * @return {String}
 * @api private
 */

Attribute.prototype.render = function() {
  var values = '';
  for(var i = 0, l = this.childNodes.length; i < l; i++) {
    values += this.childNodes[i].render();
  }
  return this.localName + '="' + values + '"';
};