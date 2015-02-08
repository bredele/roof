
/**
 * Test dependencies.
 */

var Node = require('../lib/node');
var assert = require('assert');

describe("node", function() {
  
  it('should create node with type', function() {
    var node = new Node(1);
    assert.equal(node.nodeType, 1);
  });

  describe('append node', function() {

    it('should append an other node', function() {
      var node = new Node(1);
      node.appendChild(new Node(2));

      assert.equal(node.childNodes.length, 1);
      assert.equal(node.childNodes[0].nodeType, 2);
    });

  });

});
