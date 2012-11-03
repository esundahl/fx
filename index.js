
module.exports = Fx;

function Fx(el){
  
  if (!(this instanceof Fx)) {
    return new Fx(el);
  } 
  
  this.el = el;
  return this;
  
}

Fx.prototype.show = function(speed){
  this.el.style.display = 'block';
  return this.el;
};


Fx.prototype.hide = function(speed, callback){
  this.el.style.display = 'none';
  return this.el;
};


Fx.prototype.toggle = function(speed, callback){
  if (this.isVisible() === true) {
    this.hide();
  }
  else {
    this.show();
  }
  return this.el;
};


Fx.prototype.isVisible = function(){
  if (this.el.style.display === 'none') {
    return false;
  }
  else {
    return true;
  };
};