var requireDirectory = require('require-directory');
var schema = require('../../schema');
var constants = require('../../constants');
var fs = require('fs');

module.exports = requireDirectory(module);

for (var p in module.exports) {
    if (module.exports.hasOwnProperty(p)) {
        var obj = module.exports[p];

        //decorate schema
        obj.$schema = constants.$SCHEMA;
        obj.id = constants.BASE_URL + p;

        //add schema to public interface
        schema[p] = obj;

       // fs.writeFileSync(__dirname + '/../../src/cloned/' + p + '.schema.json', JSON.stringify(obj));
    }
}