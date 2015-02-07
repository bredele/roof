
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

	it("should set attributes", function() {
		var el = dom('button', {
			id: 'btn',
			class: 'dark'
		})();
		assert.equal(el.render(), '<button id="btn" class="dark"></button>');
	});

	it('should interpolate variables', function() {
		var el = dom('button', '${label}')({
			label: 'hello world'
		});
		assert.equal(el.render(), '<button>hello world</button>');
	});
	
});
