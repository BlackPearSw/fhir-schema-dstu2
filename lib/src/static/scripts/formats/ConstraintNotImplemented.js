var tv4 = require('tv4');

module.exports = function(data, schema){
    var message = 'Not validated against ValueSet ' + schema.id;
    if (tv4.addWarning){
        tv4.addWarning(message);
    }
    else {
        console.log(message)
    }
};