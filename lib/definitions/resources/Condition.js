var Condition = {
    required: ['patient', 'code', 'verificationStatus'],
    allOf: [
        {$ref: 'DomainResource'},
        {
            oneOf: [
                {required: ['onsetDateTime']},
                {required: ['onsetQuantity']},
                {required: ['onsetPeriod']},
                {required: ['onsetRange']},
                {required: ['onsetString']},
                {
                    not: {
                        oneOf: [
                            {required: ['onsetDateTime']},
                            {required: ['onsetQuantity']},
                            {required: ['onsetPeriod']},
                            {required: ['onsetRange']},
                            {required: ['onsetString']}
                        ]
                    }
                }
            ]
        },
        {
            oneOf: [
                {required: ['abatementDateTime']},
                {required: ['abatementQuantity']},
                {required: ['abatementBoolean']},
                {required: ['abatementPeriod']},
                {required: ['abatementRange']},
                {required: ['abatementString']},
                {
                    not: {
                        oneOf: [
                            {required: ['abatementDateTime']},
                            {required: ['abatementQuantity']},
                            {required: ['abatementBoolean']},
                            {required: ['abatementPeriod']},
                            {required: ['abatementRange']},
                            {required: ['abatementString']}
                        ]
                    }
                }
            ]
        }
    ],
    properties: {
        resourceType: {
            pattern: '^Condition$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        patient: {$ref: 'Reference'},
        encounter: {$ref: 'Reference'},
        asserter: {$ref: 'Reference'},
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
        stage: {$ref: 'Condition.stage'},
        evidence: {
            type: 'array',
            items: {$ref: 'Condition.evidence'}
        },
        bodySite: {
            type: 'array',
            items: {$ref: 'CodeableConcept'}
        },
        notes: {$ref: 'string'}
    }
};

module.exports = Condition;