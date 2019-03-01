# recursive-array-or-object-javascript

# example

~~~~
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

iterate(test, (key, value) => {
  if (key == 'id') {
    console.log(key, value);
  }
  // console.log('key', key, 'value', data);
});

~~~~
