module.exports = {
    title: 'AllergyIntolerance.reaction',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['manifestation'],
    properties: {
        substance: {$ref: 'CodeableConcept'},
        certainty: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceCertainty'}
            ]
        },
        manifestation: {$ref: 'CodeableConcept'},
        description: {$ref: 'string'},
        onset: {$ref: 'dateTime'},
        severity: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AllergyIntoleranceSeverity'}
            ]
        },
        exposureRoute: {$ref: 'CodeableConcept'},
        note: {$ref: 'Annotation'}
    }
};