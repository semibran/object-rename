const rename = require('./')

var object = { foo: 3, bar: 42, baz: 101 }
var keymap = { foo: 'lorem', bar: 'ipsum' }
var result = rename(object, keymap)

console.log(result)
