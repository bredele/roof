
/**
 * Test dependencies.
 */

var Attribute = require('../lib/attribute');
var Text = require('../lib/text');
var assert = require('assert');


describe("create attribute", function() {

  it('should create an attribute', function() {
    var name = new Attribute('name');
    assert.equal(name.render(), 'name=""');
  });

  it('should return node type 2', function() {
  	var name = new Attribute('name');
  	assert.equal(name.nodeType, 2);
  });

});



describe('append child', function() {

  it('should append text node', function() {
    var name = new Attribute('name');
    name.appendChild(new Text('hello'));
    assert.equal(name.render(), 'name="hello"');
  });

});