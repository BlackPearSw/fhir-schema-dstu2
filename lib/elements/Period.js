var utils = require('../utils/index');
var dateTime = require('../elements/dateTime');

var Period = function () {
    var schema = {
        title: 'FHIR DSTU2 Period',
        properties: {
            start: dateTime(),
            end: dateTime()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Period;