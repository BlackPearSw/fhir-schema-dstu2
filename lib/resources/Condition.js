var elements = require('../elements');
var registry = require('../registry');
var formats = require('../formats');
var assertions = require('../assertions');
var DomainResource = require('./DomainResource');

var stage = function () {
    var schema = {
        title: 'Condition.stage',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        oneOf: [
            {
                required: ['summary']
            },
            {
                required: ['assessment']
            }
        ],
        properties: {
            summary: {$ref: 'CodeableConcept'},
            assessment: elements.Reference({types:['ClinicalImpression', 'DiagnosticReport', 'Observation']})
        }
    };

    return schema;
};

var evidence = function () {
    var schema = {
        title: 'Condition.evidence',
        allOf: [
            {$ref: 'BackboneElement'}
        ],
        oneOf: [
            {
                required: ['code']
            },
            {
                required: ['detail']
            }
        ],
        properties: {
            code: {$ref: 'CodeableConcept'},
            detail: {$ref: 'Reference'}
        }
    };

    return schema;
};

var Condition = function () {
    var schema = {
        required: ['patient', 'code', 'verificationStatus'],
        allOf: [
            DomainResource({resourceType:'Condition'})
        ],
        properties: {
            identifier: {
                type: 'array',
                items: {$ref: 'Identifier'}
            },
            patient: elements.Reference({types: ['Patient']}),
            encounter: elements.Reference({types: ['Encounter']}),
            asserter: elements.Reference({types: ['Patient', 'Practitioner']}),
            dateRecorded: {$ref: 'date'},
            code: {$ref: 'CodeableConcept'},
            category: {$ref: 'CodeableConcept'},
            clinicalStatus: {$ref: 'code'},
            verificationStatus: {$ref: 'code'},
            severity: {$ref: 'CodeableConcept'},
            onsetDateTime: {$ref: 'dateTime'},
            onsetQuantity: {$ref: 'Age'},
            onsetPeriod: {$ref: 'Period'},
            onsetRange: {$ref: 'Range'},
            onsetString: {$ref: 'string'},
            abatementDateTime: {$ref: 'dateTime'},
            abatementQuantity: {$ref: 'Age'},
            abatementBoolean: {$ref: 'boolean'},
            abatementPeriod: {$ref: 'Period'},
            abatementRange: {$ref: 'Range'},
            abatementString: {$ref: 'string'},
            stage: stage(),
            evidence: {
                type: 'array',
                items: evidence()
            },
            bodySite : {
                type : 'array',
                items: {$ref: 'CodeableConcept'}
            },
            notes: {$ref: 'string'}
        },
        format: 'Condition'
    };

    formats['Condition'] = assertions.assert([
        assertions.choice('onset', 'onset[x] is a choice'),
        assertions.choice('abatement', 'abatement[x] is a choice')
    ]);

    return schema;
};

module.exports = Condition;