# object-rename
> Rename an object's keys using a map

```js
const rename = require('object-rename')

var object = { foo: 3, bar: 42, baz: 101 }
var keymap = { foo: 'lorem', bar: 'ipsum' }
var result = rename(object, keymap)

console.log(result) // -> { lorem: 3, ipsum: 42 }
```

This module exports the `rename` function, which takes two arguments:

- `object`: The object whose keys are to be renamed
- `keymap`: An map-like object whose keys correspond to the new keys to be renamed to

`rename` returns a copy of `object` with the keys renamed as described by `keymap`. However, any keys that are not included in the map are left out entirely for compactness.

## install
```sh
npm install object-rename
```

## license
MIT
