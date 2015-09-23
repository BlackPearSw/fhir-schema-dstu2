var fs = require('fs');

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

module.exports = {};
registerDir(__dirname + '/../json-schema/');
