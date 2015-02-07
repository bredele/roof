
/**
 * Test dependencies.
 */

var Text = require('../lib/text');
var assert = require('assert');


describe("create text", function() {

	it('should create an attribute', function() {
		var text = new Text('hello world');
		assert.equal(text.render(), 'hello world');
	});

});

