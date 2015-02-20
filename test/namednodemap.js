
/**
 * Test dependencies.
 */

var NamedNodeMap = require('../lib/namednodemap');
var Node = require('../lib/node');
var assert = require('assert');


describe("named node map", function() {

	it('should set named item', function() {
		var attributes = new NamedNodeMap();
		var name = new Node(3, 'name');

		attributes.setNamedItem(name);
		assert.equal(attributes[0], name);
	});

	it('should get names item', function() {
		var attributes = new NamedNodeMap();
		var name = new Node(3, 'name');

		attributes.setNamedItem(name);
		assert.equal(attributes.getNamedItem('name'), name);
	});

	it('should update named item', function() {
		var attributes = new NamedNodeMap();
		attributes.setNamedItem(new Node(4, 'name'));
		var name = new Node(3, 'name');
		attributes.setNamedItem(name);
		assert.equal(attributes[0], name);
	});

});
