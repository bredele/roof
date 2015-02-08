
/**
 * Test dependencies.
 */

var Element = require('../lib/element');
var Attribute = require('../lib/attribute');
var Text = require('../lib/text');
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

  it('should return node type 1', function() {
    var div = new Element('div');
    assert.equal(div.nodeType, 1);
  });

  // it('should set innerHTML', function() {
  //  var btn = new Element('button');
  //  btn.innerHTML = 'something';
  //  assert.equal(btn.render(), '<button>something</button>');
  // });

});


describe('append child', function() {

  it('should append an other element', function() {
    var link = new Element('a');
    var btn = new Element('button');
    link.appendChild(btn);
    assert.equal(link.render(), '<a><button></button></a>');
  });

  // we should test children as well
  
  it('should append multiple element', function() {
    var link = new Element('div');
    var first = new Element('span');
    var second = new Element('span');
    link.appendChild(first);
    link.appendChild(second);
    assert.equal(link.render(), '<div><span></span><span></span></div>');
  });

  it('should append nested elements', function() {
    var link = new Element('div');
    var first = new Element('a');
    var second = new Element('span');
    link.appendChild(first);
    first.appendChild(second);
    assert.equal(link.render(), '<div><a><span></span></a></div>');
  });
});

describe('set attribute', function() {
  
  it('should set one attribute', function() {
    var link = new Element('div');
    link.setAttribute('class', 'test');
    assert.equal(link.render(), '<div class="test"></div>');
  });

  it('should set one attribute multiple times', function() {
    var link = new Element('div');
    link.setAttribute('class', 'test');
    link.setAttribute('class', 'other');
    assert.equal(link.render(), '<div class="other"></div>');
  });

  it('should set multiple attributes', function() {
    var link = new Element('a');
    link.setAttribute('class', 'test');
    link.setAttribute('id', 'link');
    assert.equal(link.render(), '<a class="test" id="link"></a>');
  });

  it("set attribute named item", function() {
    var link = new Element('a');
    
    var id = new Attribute('id');
    id.appendChild(new Text('link'));

    link.attributes.setNamedItem(id);
    assert.equal(link.render(), '<a id="link"></a>');

  });

});

describe("child nodes", function() {
  
  it('should return first child', function() {
    var div = new Element('div');
    div.appendChild(new Text('hello world!'));
    div.appendChild(new Element('button'));

    assert.equal(div.firstChild.render(), 'hello world!');
  });

  it('should get the next sibling element', function () {
    var div = new Element('div');
    div.appendChild(new Text('hello world!'));
    div.appendChild(new Element('button'));

    var child = div.firstChild;
    assert.equal(child.nextSibling.localName, 'button');
  });
});

