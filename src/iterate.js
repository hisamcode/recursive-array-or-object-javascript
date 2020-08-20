
function iterate(datas, callback) {
  if (isArrayOrObject(datas) != 3) {
    // array
    for (let key in datas) {
      let val = datas[key];
      isArrayOrObjectIterate(key, val, data, callback);
    }
  }
}

function isArrayOrObject(data) {
  if (Array.isArray(data)) {
    return 1;
  } else if (typeof data == 'object') {
    return 2;
  } else {
    return 3;
  }
}

function isArrayOrObjectIterate(key, val, data, callback) {
  callback(key, val, data);
  if (isArrayOrObject(val) != 3) {
    iterate(val, callback);
  }
}
