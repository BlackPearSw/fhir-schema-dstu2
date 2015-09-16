var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');
var DomainResource = require('./DomainResource');

var reaction = function () {
    var schema = {
        title: 'AllergyIntolerance.reaction',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        required: ['manifestation'],
        properties: {
            substance: {$ref: 'CodeableConcept'},
            certainty: elements.code({codes: registry.valueSets.AllergyIntoleranceCertainty.codes}),
            manifestation: {$ref: 'CodeableConcept'},
            description: {$ref: 'string'},
            onset: {$ref: 'dateTime'},
            severity: elements.code({codes: registry.valueSets.AllergyIntoleranceSeverity.codes}),
            exposureRoute: {$ref: 'CodeableConcept'},
            note: {$ref: 'Annotation'}
        }
    };

    return schema;
};


var AllergyIntolerance = function () {
    var schema = {
        allOf: [
            DomainResource({resourceType:'AllergyIntolerance'})
        ],
        required: ['patient', 'substance'],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            onset: {$ref: 'dateTime'},
            recordedDate: {$ref: 'dateTime'},
            recorder: elements.Reference({types: ['Practitioner', 'Patient']}),
            patient: elements.Reference({types: ['Patient']}),
            reporter: elements.Reference({types: ['Practitioner', 'Patient', 'RelatedPerson']}),
            substance: {$ref: 'CodeableConcept'},
            status: elements.code({codes: registry.valueSets.AllergyIntoleranceStatus.codes}),
            criticality: elements.code({codes: registry.valueSets.AllergyIntoleranceCriticality.codes}),
            type: elements.code({codes: registry.valueSets.AllergyIntoleranceType.codes}),
            category: elements.code({codes: registry.valueSets.AllergyIntoleranceCategory.codes}),
            lastOccurence: {$ref: 'dateTime'},
            note: {$ref: 'Annotation'},
            reaction: {
                type: 'array',
                items: reaction()
            }
        }
    };

    return schema;
};


module.exports = AllergyIntolerance;