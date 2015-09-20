module.exports = {
    title: 'Practitioner.practitionerRole',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        managingOrganization: {$ref: 'Reference'},
        role: {$ref: 'CodeableConcept'},
        specialty: {$ref: 'CodeableConcept'},
        period: {$ref: 'Period'},
        location: {$ref: 'Reference'},
        healthcareService: {$ref: 'Reference'}
    }
};