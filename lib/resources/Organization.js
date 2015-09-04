var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');

var contact = function () {
    var schema = {
        title: 'FHIR DSTU2 Organization.contact',
        properties: {
            purpose: elements.CodeableConcept(),
            name: elements.HumanName(),
            telecom: {
                type: 'array',
                items: elements.ContactPoint()
            },
            address: elements.Address()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};


var Organization = function () {
    var schema = {
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            active: elements.boolean(),
            type: elements.CodeableConcept(),
            name: elements.string(),
            telecom: {
                type: 'array',
                items: elements.ContactPoint()
            },
            address: {
                type: 'array',
                items: elements.Address()
            },
            partOf: elements.Reference({types: ['Organization']}),
            contact: {
                type: 'array',
                items: contact()
            }
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'Organization'});
};


module.exports = Organization;