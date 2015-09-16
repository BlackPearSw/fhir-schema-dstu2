var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');

var reaction = function () {
    var schema = {
        title: 'FHIR DSTU2 AllergyIntolerance.reaction',
        required: ['manifestation'],
        properties: {
            substance: elements.CodeableConcept(),
            certainty: elements.code({codes: registry.valueSets.AllergyIntoleranceCertainty.codes}),
            manifestation: elements.CodeableConcept(),
            description: elements.string(),
            onset: elements.dateTime(),
            severity: elements.code({codes: registry.valueSets.AllergyIntoleranceSeverity.codes}),
            exposureRoute: elements.CodeableConcept(),
            note: elements.Annotation()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};


var AllergyIntolerance = function () {
    var schema = {
        required: ['patient', 'substance'],
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            onset: elements.dateTime(),
            recordedDate: elements.dateTime(),
            recorder: elements.Reference({types: ['Practitioner', 'Patient']}),
            patient: elements.Reference({types: ['Patient']}),
            reporter: elements.Reference({types: ['Practitioner', 'Patient', 'RelatedPerson']}),
            substance: elements.CodeableConcept(),
            status: elements.code({codes: registry.valueSets.AllergyIntoleranceStatus.codes}),
            criticality: elements.code({codes: registry.valueSets.AllergyIntoleranceCriticality.codes}),
            type: elements.code({codes: registry.valueSets.AllergyIntoleranceType.codes}),
            category: elements.code({codes: registry.valueSets.AllergyIntoleranceCategory.codes}),
            lastOccurence: elements.dateTime(),
            note: elements.Annotation(),
            reaction: {
                type: 'array',
                items: reaction()
            }
        }
    };

    return utils.factory.makeDomainResource(schema, {resourceType: 'AllergyIntolerance'});
};


module.exports = AllergyIntolerance;