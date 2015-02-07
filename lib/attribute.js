
/**
 * Expose 'Attribute'
 */

module.exports = Attribute;


/**
 * Attribute constructor.
 * @api public
 */

function Attribute(name) {
  this.localName = name;
  // childNodes should be a nodelist
  this.childNodes = [];
}

Attribute.prototype.appendChild = function(child) {
  this.childNodes.push(child);
  return child;
};


Attribute.prototype.render = function() {
  var values = '';
  for(var i = 0, l = this.childNodes.length; i < l; i++) {
    values += this.childNodes[i].render();
  }
  return this.localName + '="' + values + '"';
};