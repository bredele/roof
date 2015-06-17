
/**
 * Test dependencies.
 */

var Text = require('../lib/text');
var assert = require('assert');


describe("create text", function() {

	it('should create an attribute', function() {
		var text = new Text('hello world');
		assert.equal(text.outerHTML, 'hello world');
	});

	it('should return node type 3', function() {
		var text = new Text('hello world');
		assert.equal(text.nodeType, 3);
	});

});

