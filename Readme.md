# Fx

  dom effects fade, slide and animation actions

## Installation

    $ component install esundahl/fx --save

## Usage

### Fx(el)

  The `Fx` may also be used as a mixin. For example
  a "plain" object may be imbued with Fx, or you may
  extend an existing prototype.

  As an `Fx` instance:

```js
var Fx = require('fx');
Fx(el).toggle(500, callback);
```

	As a mixin:

```js
var Fx = require('fx');
var el = document.createElement('div');
Fx.imbue(el);
el.toggle();
```

	As a prototype mixin:

```js
var Fx = require('fx');
Fx.imbue(El.prototype);
```

## API

### Basics

### show(duration, callback)
### hide(duration, callback)
### toggle(duration, callback)

### Sliding

### slideUp(duration, callback)
### slideDown(duration, callback)
### slideToggle(duration, callback)

## License

  MIT
