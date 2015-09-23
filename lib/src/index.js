var fs = require('fs');
var factory = require('../utils/factory');

function expandPath(dir) {
    return function (file) {
        return dir + file;
    }
}

function readFile(file) {
    return fs.readFileSync(file, 'utf-8');
}

function toObj(json) {
    try {
        return JSON.parse(json);
    }
    catch (ex) {
        console.log(ex);
        console.log(json);
    }
}

function toSchemas(resource) {
    return factory.makeJsonSchema(resource);
}

function saveFiles(dir) {
    return function (schemas) {
        for (var schema in schemas) {
            var name = schema.split('/').pop();
            fs.writeFileSync(dir + name + '.json', JSON.stringify(schemas[schema]));
        }
    }
}

function parseDir(dir) {
    fs.readdirSync(dir)
        .map(expandPath(dir))
        .map(readFile)
        .map(toObj)
        .map(toSchemas)
        .map(saveFiles(__dirname + '/json-schema/'));
}

function mixinDir(dir) {
    fs.readdirSync(dir).forEach(function(file){
        var path = dir + file;
        var schema = fs.readFileSync(path, 'utf-8');
        fs.writeFileSync(__dirname + '/json-schema/' + file, schema);
    });
}

function clearDir(dir){
    fs.readdirSync(dir).forEach(function(file){
        var path = dir + file;
        fs.unlink(path);
    });
}

function registerDir(dir){
    fs.readdirSync(dir).forEach(function(file){
        var path = dir + file;
        var data = fs.readFileSync(path, 'utf-8');
        if (data === 'undefined'){
            console.log(file);
        }
        var schema = JSON.parse(data);

        schema.title = schema.id.split('/').pop();
        module.exports[schema.title] = schema;
    });
}

clearDir(__dirname + '/json-schema/');
parseDir(__dirname + '/src/dynamic/StructureDefinition/');
parseDir(__dirname + '/src/dynamic/ValueSet/');
mixinDir(__dirname + '/src/static/json-schema/constraints/');
mixinDir(__dirname + '/src/static/json-schema/elements/');
mixinDir(__dirname + '/src/static/json-schema/resources/');

module.exports = {};
registerDir(__dirname + '/json-schema/');
