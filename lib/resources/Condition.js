var utils = require('../utils');
var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');

var stage = function () {
    var schema = {
        title: 'FHIR DSTU2 Condition.stage',
        oneOf: [
            {
                required: ['summary']
            },
            {
                required: ['assessment']
            }
        ],
        properties: {
            summary: elements.CodeableConcept(),
            assessment: elements.Reference({types:['ClinicalImpression', 'DiagnosticReport', 'Observation']})
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var evidence = function () {
    var schema = {
        title: 'FHIR DSTU2 Condition.evidence',
        oneOf: [
            {
                required: ['code']
            },
            {
                required: ['detail']
            }
        ],
        properties: {
            code: elements.CodeableConcept(),
            detail: elements.Reference()
        }
    };

    return utils.factory.makeBackboneElement(schema);
};

var Condition = function () {
    var schema = {
        required: ['patient', 'code', 'verificationStatus'],
        properties: {
            identifier: {
                type: 'array',
                items: elements.Identifier()
            },
            patient: elements.Reference({types: ['Patient']}),
            encounter: elements.Reference({types: ['Encounter']}),
            asserter: elements.Reference({types: ['Patient', 'Practitioner']}),
            dateRecorded: elements.date(),
            code: elements.CodeableConcept(),
            category: elements.CodeableConcept(),
            clinicalStatus: elements.code(),
            verificationStatus: elements.code(),
            severity: elements.CodeableConcept(),
            onsetDateTime: elements.dateTime(),
            onsetQuantity: elements.Age(),
            onsetPeriod: elements.Period(),
            onsetRange: elements.Range(),
            onsetString: elements.string(),
            abatementDateTime: elements.dateTime(),
            abatementQuantity: elements.Age(),
            abatementBoolean: elements.boolean(),
            abatementPeriod: elements.Period(),
            abatementRange: elements.Range(),
            abatementString: elements.string(),
            stage: stage(),
            evidence: {
                type: 'array',
                items: evidence()
            },
            bodySite : {
                type : 'array',
                items: elements.CodeableConcept()
            },
            notes: elements.string()
        },
        format: 'DSTU2.Condition'
    };

    formats['DSTU2.Condition'] = assertions.assert([
        assertions.choice('onset', 'onset[x] is a choice'),
        assertions.choice('abatement', 'abatement[x] is a choice')
    ]);

    return utils.factory.makeDomainResource(schema, {resourceType: 'Condition'});
};


module.exports = Condition;