var Immunization = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    required: ['status', 'vaccineCode', 'patient', 'wasNotGiven', 'reported'],
    properties: {
        resourceType: {
            pattern: '^Immunization$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'MedicationAdministrationStatus'}
            ]
        },
        date: {$ref: 'dateTime'},
        vaccineCode: {$ref: 'CodeableConcept'},
        patient: {$ref: 'Reference'},
        wasNotGiven: {$ref: 'boolean'},
        reported: {$ref: 'boolean'},
        performer: {$ref: 'Reference'},
        requestor: {$ref: 'Reference'},
        encounter: {$ref: 'Reference'},
        manufacturer: {$ref: 'Reference'},
        location: {$ref: 'Reference'},
        lotNumber: {$ref: 'string'},
        expirationDate: {$ref: 'date'},
        site: {$ref: 'CodeableConcept'},
        route: {$ref: 'CodeableConcept'},
        doseQuantity: {$ref: 'SimpleQuantity'},
        note: {
            type: 'array',
            items: {$ref: 'Annotation'}
        },
        explanation: {$ref: 'Immunization.explanation'},
        reaction: {
            type: 'array',
            items: {$ref: 'Immunization.reaction'}
        },
        vaccinationProtocol: {
            type: 'array',
            items: {$ref: 'Immunization.vaccinationProtocol'}
        }
    }
};

module.exports = Immunization;