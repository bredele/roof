
/**
 * Test dependencies.
 */

var dom = require('grout');
var document = require('..');
var assert = require('assert');


describe("grout", function() {
	
	it('should create dom element', function() {
		var el = dom('button', 'hello')();
		assert.equal(el.render(), '<button>hello</button>');
	});

	it('should nest dom elements', function() {
		var el = dom('ul', [
			'hello',
			dom('li', 'world')
		])();
		assert.equal(el.render(), '<ul>hello<li>world</li></ul>');
	});
});
