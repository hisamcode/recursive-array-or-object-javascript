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

  module.isArrayOrObjectIterate = (key, data) => {
    module.callback(key, data);
    if (module.isArrayOrObject(data) != 3) {
      module.iterate(data);
    }
  }

  module.iterate = (datas) => {
    if (module.isArrayOrObject(datas) != 3) {
      for (let key in datas) {
        let data = datas[key];
        module.isArrayOrObjectIterate(key, data);
      }
    }
  }

  return module.iterate(datas);
}