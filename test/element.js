
/**
 * Test dependencies.
 */

var Element = require('../lib/element');
var assert = require('assert');


describe("create", function() {

	it('should create a div', function() {
		var div = new Element('div');
		assert.equal(div.render(), '<div></div>');
	});

	it('should create any element', function() {
		var btn = new Element('button');
		assert.equal(btn.render(), '<button></button>');
	});

	// it('should set innerHTML', function() {
	// 	var btn = new Element('button');
	// 	btn.innerHTML = 'something';
	// 	assert.equal(btn.render(), '<button>something</button>');
	// });

});


describe('append', function() {

	it('should append an other element', function() {
		var link = new Element('a');
		var btn = new Element('button');
		link.appendChild(btn);
		assert.equal(link.render(), '<a><button></button></a>');
	});

	// we should test children as well
	

});
