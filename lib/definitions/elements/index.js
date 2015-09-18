var requireDirectory = require('require-directory');
var schema = require('../../schema');
var constants = require('../../constants');

module.exports = requireDirectory(module);

for (var p in module.exports) {
    if (module.exports.hasOwnProperty(p)) {
        var obj = module.exports[p];

        //decorate schema
        obj.$schema = constants.$SCHEMA;
        obj.id = constants.BASE_URL + p;

        //add schema to public interface
        schema[p] = obj;

        //create JSON
        /*
         var fs = require('fs');

        var json = JSON.stringify(obj);
        var file = __dirname + '/../../json/' + p + '.json';
        fs.writeFileSync(file, json);
        */

    }
}