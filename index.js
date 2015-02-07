/**
 * Module dependencies.
 */

var Element = require('./lib/element');
var Attribute = require('./lib/attribute');
var Text = require('./lib/text');


/**
 * Fake document scope.
 * @type {Object}
 */

global.document = {

	/**
	 * Create Element.
	 * 
	 * @param  {String} tag
	 * @return {Element}
	 * @api public
	 */
	
	createElement: function(tag) {
		return new Element(tag);
	},


	/**
	 * Create Attribute.
	 * 
	 * @param  {String} key
	 * @return {Attribute}
	 * @api public
	 */
	
	createAttribute: function(key) {
		return new Attribute(key);
	},


	/**
	 * Create text node.
	 * 
	 * @param  {String} value
	 * @return {Text}
	 * @api public
	 */
	
	createTextNode: function(value) {
		return new Text(value);
	}
};