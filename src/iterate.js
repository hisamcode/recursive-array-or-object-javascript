
function iterate(datas, callback) {
  if (isArrayOrObject(datas) != 3) {
    // array
    for (let key in datas) {
      let data = datas[key];
      isArrayOrObjectIterate(key, data, callback);
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

function isArrayOrObjectIterate(key, data, callback) {
  callback(key, data);
  if (isArrayOrObject(data) != 3) {
    iterate(data, callback);
  }
}
