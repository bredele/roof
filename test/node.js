
/**
 * Test dependencies.
 */

var Node = require('../lib/node');
var assert = require('assert');


describe("node api", function() {
	
	it('should create node with type', function() {
		var node = new Node(1);
		assert.equal(node.nodeType, 1);
	});

});
