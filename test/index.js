const recursiveArrayObject = require('../src/index');

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

recursiveArrayObject(test, (key, values) => {
  console.log(key);
});