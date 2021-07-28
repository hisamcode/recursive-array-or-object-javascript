module.exports = (datas, callback) => {
  var module = {};
  module.datas = datas;
  module.callback = callback;

  module.isArrayOrObject = (data) => {
    if (Array.isArray(data)) {
      return 1;
    } else if (typeof data == 'object') {
      return 2;
    } else {
      return 3;
    }
  }

  module.isArrayOrObjectIterate = (key, val, data) => {
    module.callback(key, val, data);
    if (module.isArrayOrObject(val) != 3) {
      module.iterate(val);
    }
  }

  module.iterate = (datas) => {
    if (module.isArrayOrObject(datas) != 3) {
      for (let key in datas) {
        let val = datas[key];
        module.isArrayOrObjectIterate(key, val, datas);
      }
    }
  }

  return module.iterate(datas);
}