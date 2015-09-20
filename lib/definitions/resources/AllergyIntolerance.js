module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    required: ['patient', 'substance'],
    properties: {
        resourceType: {
            pattern: '^AllergyIntolerance$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        onset: {$ref: 'dateTime'},
        recordedDate: {$ref: 'dateTime'},
        recorder: {$ref: 'Reference'},
        patient: {$ref: 'Reference'},
        reporter: {$ref: 'Reference'},
        substance: {$ref: 'CodeableConcept'},
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceStatus'}
            ]
        },
        criticality: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceCriticality'}
            ]
        },
        type: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceType'}
            ]
        },
        category: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceCategory'}
            ]
        },
        lastOccurence: {$ref: 'dateTime'},
        note: {$ref: 'Annotation'},
        reaction: {
            type: 'array',
            items: {$ref: 'AllergyIntolerance.reaction'}
        }
    }
};