# Fx

  dom effects fade, slide and animation actions

## Installation

    $ component install esundahl/fx --save

## Usage

### Fx(el)


```js
var Fx = require('fx');
Fx(el).toggle(500, callback);
```

## API

### Basics

### show(duration, callback)
```js
// Omitting the optional duration and callback the el object
// is shown without a transition.
Fx(el).show();

// Shows the element with a half second fadeIn effect and executes
// the callback function on completion.
Fx(el).show(500, callback);
```


### hide(duration, callback)
```js
// Omitting the optional duration and callback parameters
// the el object is hidden without a transition.
Fx(el).hide();

// Hides the element with a half second fadeOut effect and executes
// the callback function on completion.
Fx(el).hide(500, callback);
```


### toggle(duration, callback)
```js
// Omitting the optional duration and callback parameters
// the el object is toggled without a transition.
Fx(el).toggle();

// Toggles the element with a half second fadeOut/fadeIn effect and executes
// the callback function on completion.
Fx(el).toggle(500);
```

### Sliding

### slideUp(duration, callback)
Eventually
### slideDown(duration, callback)
Eventually
### slideToggle(duration, callback)
Eventually

## License

  MIT
