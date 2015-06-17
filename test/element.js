
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
    assert.equal(div.outerHTML, '<div></div>');
  });

  it('should create any element', function() {
    var btn = new Element('button');
    assert.equal(btn.outerHTML, '<button></button>');
  });

  it('should return node type 1', function() {
    var div = new Element('div');
    assert.equal(div.nodeType, 1);
  });

  // it('should set innerHTML', function() {
  //  var btn = new Element('button');
  //  btn.innerHTML = 'something';
  //  assert.equal(btn.outerHTML, '<button>something</button>');
  // });

});


describe('append child', function() {

  it('should append an other element', function() {
    var link = new Element('a');
    var btn = new Element('button');
    link.appendChild(btn);
    assert.equal(link.outerHTML, '<a><button></button></a>');
  });

  // we should test children as well
  
  it('should append multiple element', function() {
    var link = new Element('div');
    var first = new Element('span');
    var second = new Element('span');
    link.appendChild(first);
    link.appendChild(second);
    assert.equal(link.outerHTML, '<div><span></span><span></span></div>');
  });

  it('should append nested elements', function() {
    var link = new Element('div');
    var first = new Element('a');
    var second = new Element('span');
    link.appendChild(first);
    first.appendChild(second);
    assert.equal(link.outerHTML, '<div><a><span></span></a></div>');
  });
});

describe('set attribute', function() {
  
  it('should set one attribute', function() {
    var link = new Element('div');
    link.setAttribute('class', 'test');
    assert.equal(link.outerHTML, '<div class="test"></div>');
  });

  it('should set one attribute multiple times', function() {
    var link = new Element('div');
    link.setAttribute('class', 'test');
    link.setAttribute('class', 'other');
    assert.equal(link.outerHTML, '<div class="other"></div>');
  });

  it('should set multiple attributes', function() {
    var link = new Element('a');
    link.setAttribute('class', 'test');
    link.setAttribute('id', 'link');
    assert.equal(link.outerHTML, '<a class="test" id="link"></a>');
  });

  it("set attribute named item", function() {
    var link = new Element('a');
    
    var id = new Attribute('id');
    id.appendChild(new Text('link'));

    link.attributes.setNamedItem(id);
    assert.equal(link.outerHTML, '<a id="link"></a>');

  });

});

describe("get attribute", function() {

  it("should get attribute value", function() {
    var link = new Element('a');
    link.setAttribute('class', 'link');

    assert.equal(link.getAttribute('class'), 'link');
  });

  it('should return undefined if attribute does not exist', function() {
    var link = new Element('a');
    assert(!link.getAttribute('class'));
  });
  
});


describe("child nodes", function() {
  
  it('should return first child', function() {
    var div = new Element('div');
    div.appendChild(new Text('hello world!'));
    div.appendChild(new Element('button'));

    assert.equal(div.firstChild.outerHTML, 'hello world!');
  });

  it('should get the next sibling element', function () {
    var div = new Element('div');
    div.appendChild(new Text('hello world!'));
    div.appendChild(new Element('button'));

    var child = div.firstChild;
    assert.equal(child.nextSibling.localName, 'button');
  });
});

describe("innerHTML", function() {
  
  it('should set text as inner html', function() {
    var div = new Element('div');
    div.innerHTML = 'hello';
    assert.equal(div.outerHTML, '<div>hello</div>');
  });


  it('should return innerHTML', function() {
    var div = new Element('div');
    div.appendChild(new Element('span'));
    div.appendChild(new Element('span'));
    assert.equal(div.innerHTML, '<span></span><span></span>');
  });

  it('should set simple html as inner HTML', function() {
      var div = new Element('div');
      div.innerHTML = '<button>hello</button>';
      assert.equal(div.outerHTML, '<div><button>hello</button></div>');
      assert.equal(div.firstChild.localName, 'button');
  });

  it('should work with complex html', function() {
    var div = new Element('div');
    div.innerHTML = '<button class="btn">hello <br> <span>Helloo <input /></span></button>';
    assert.equal(div.innerHTML, '<button class="btn">hello <br/> <span>Helloo <input/></span></button>');
  });
});

describe('insertAdjacentHTML', function() {

  it('should insert before end / append', function() {
    var div = new Element('div');
    div.innerHTML = '<button>hello</button>';
    div.insertAdjacentHTML('beforeend', '<span>world</span>');

    assert.equal(div.innerHTML, '<button>hello</button><span>world</span>');
  });
});

