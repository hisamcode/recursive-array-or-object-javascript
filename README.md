# recursive array or object javascript

## example nodejs

#### npm i recursive-array-or-object

```
const iterate = require('recursive-array-or-object');

let test = [{
  name: 'satu',
  sub: {
    name: 'dua',
    sub: {
      name: 'tiga',
      sub: {
        name: 'empat',
        sub: [{
          test: '123',
          id: 1,
        }, ],
      },
    },
  },
}, ];

iterate(test, (key, value, data) => {
  if (key == 'name' && value == 'empat') {
    data[key] = 'telepat';
  }
  if (key == 'id') {
    console.log(key, value, data);
  }
})

```

## example src/iterate.js for browser

```
let test = [{
  name: 'satu',
  sub: {
    name: 'dua',
    sub: {
      name: 'tiga',
      sub: {
        name: 'empat',
        sub: [{
          test: '123',
          id: 1,
        }, ],
      },
    },
  },
}, ];

iterate(test, (key, value, data) => {
  if (key == 'name' && value == 'empat') {
    data[key] = 'telepat';
  }
  if (key == 'id') {
    console.log(key, value, data);
  }
});

```
