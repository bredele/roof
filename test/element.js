
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

	describe("one element", function() {

		var link, btn;

		beforeEach(function() {
			link = new Element('a');
			btn = new Element('button');
		});
		
		it('should append an other element', function() {

			link.appendChild(btn);
			assert.equal(link.render(), '<a><button></button></a>');
		});
		
	});
	

});
