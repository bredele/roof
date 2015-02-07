
/**
 * Test dependencies.
 */

var assert = require('assert');
require('..');


describe("document", function() {
  
  it('should have createElement handler', function() {
    assert.equal(typeof document.createElement, 'function');
  });

  it("should have createAttribute handler", function() {
    assert.equal(typeof document.createAttribute, 'function');
  });

  it("should have createTextNode handler", function() {
    assert.equal(typeof document.createTextNode, 'function');
  });

  it('should create dom node', function() {
    var btn = document.createElement('button');
    btn.setAttribute('class', 'test');
    btn.appendChild(document.createTextNode('olivier'));

    assert.equal(btn.render(), '<button class="test">olivier</button>');
  });
  
  
});
