var requireDirectory = require('require-directory');
var schema = require('../../schema');

module.exports = requireDirectory(module);

for (var p in module.exports){
    if (module.exports.hasOwnProperty(p)) {
        schema[p] = module.exports[p];
    }
}