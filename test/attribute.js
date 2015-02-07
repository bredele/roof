
/**
 * Test dependencies.
 */

var Attribute = require('../lib/attribute');
var assert = require('assert');


describe("create attribute", function() {

	it('should create an attribute', function() {
		var name = new Attribute('name');
		assert.equal(name.render(), 'name=""');
	});

});



describe('append child', function() {

  it('should append text node', function() {

  });

});