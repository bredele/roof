/**
 * Module dependencies.
 */

var Element = require('./lib/element');
var Attribute = require('./lib/attribute');
var Text = require('./lib/text');

global.document = {
	createElement: function(tag) {
		return new Element(tag);
	},

	createAttribute: function(key) {
		return new Attribute(key);
	},

	createTextNode: function(value) {
		return new Text(value);
	}
};