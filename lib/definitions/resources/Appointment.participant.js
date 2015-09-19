module.exports = {
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['status'],
    properties: {
        type: [
            {
                type: 'array',
                items: {$ref: 'CodeableConcept'}
            }
        ],
        actor: {$ref: 'Reference'},
        required: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'ParticipantRequired'}
            ]
        },
        status: {
            allOf: [
                {$ref: 'code'},
                {$ref: 'ParticipationStatus'}
            ]
        }
    }
};