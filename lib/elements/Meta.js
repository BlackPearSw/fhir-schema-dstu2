var utils = require('../utils');
var id = require('../elements/id');
var instant = require('../elements/instant');
var uri = require('../elements/uri');

var Meta = function () {
    var schema = {
        title: 'FHIR DSTU2 Meta',
        properties: {
            versionId: id(),
            lastUpdated: instant(),
            profile: {
                type: 'array',
                items: uri()
            }
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Meta;