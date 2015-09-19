module.exports = {
    allOf: [
        {$ref: 'DomainResource'}
    ],
    required: ['status'],
    properties: {
        resourceType: {
            pattern: '^Appointment$'
        },
        identifier: {
            type: 'array',
            items: {$ref: 'Identifier'}
        },
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'AppointmentStatus'}
            ]
        },
        type: {$ref: 'CodeableConcept'},
        reason: {$ref: 'CodeableConcept'},
        priority: {$ref: 'unsignedInt'},
        description: {$ref: 'string'},
        start: {$ref: 'instant'},
        end: {$ref: 'instant'},
        minutesDuration: {$ref: 'positiveInt'},
        slot: {$ref: 'Reference'},
        comment: {$ref: 'string'},
        participant: {
            type: 'array',
            items: {$ref: 'Appointment.participant'},
            minItems: 1
        }
    }
};