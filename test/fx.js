
var fx = require('fx');

describe('fx()', function() {
  
  var el;
  
  beforeEach(function(){
    el = document.createElement('div');
  });
  
  describe('.show()', function() {
    it('should show the element', function() {
      el.style.display = 'hidden';
      fx(el).show();
      assert(fx(el).isVisible() === true);
    })
    
    it('should return the el', function() {
      assert(fx(el).show() == el);
    })
  })
  
  describe('.hide()', function() {
    it('should hide the element', function() {
      el.style.display = 'block';
      fx(el).hide();
      assert(el.style.display === 'none');
    })
    
    it('should return the el', function() {
      assert(fx(el).hide() == el);
    })
  })
  
  describe('.isVisible()', function() {
    it('should return true if el is visible', function() {
      fx(el).show();
      assert(fx(el).isVisible() === true);
    })
    
    it('should return false if el is hidden', function() {
      fx(el).hide();
      assert(fx(el).isVisible() === false);
    })
  })
  
  describe('.toggle()', function() {
    
    it('should show the element if it is hidden', function() {
      fx(el).hide();
      fx(el).toggle();
      assert(fx(el).isVisible() === true);
    })
    
    it('should hide the element if it is visible', function() {
      fx(el).show();
      fx(el).toggle();
      assert(fx(el).isVisible() === false);
    })
    
  })

})