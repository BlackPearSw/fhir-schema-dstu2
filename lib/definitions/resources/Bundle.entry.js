module.exports = {
    required: [],
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        link: {
            type: 'array',
            items: {$ref: 'Bundle.link'}
        },
        fullUrl: {$ref: 'uri'},
        resource: {
            oneOf: [
                {$ref: 'AllergyIntolerance'},
                {$ref: 'Appointment'},
                {$ref: 'Bundle'},
                {$ref: 'Condition'},
                {$ref: 'Immunization'},
                {$ref: 'MedicationOrder'},
                {$ref: 'OperationOutcome'},
                {$ref: 'Organization'},
                {$ref: 'Patient'},
                {$ref: 'Person'},
                {$ref: 'Practitioner'},
                {$ref: 'Slot'},
                {$ref: 'Schedule'}
            ]
        },
        search: {$ref: 'Bundle.entry.search'},
        request: {$ref: 'Bundle.entry.request'},
        response: {$ref: 'Bundle.entry.response'}
    }
};