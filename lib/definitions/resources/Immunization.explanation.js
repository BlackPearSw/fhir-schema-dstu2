module.exports = {
    title: 'Immunization.explanation',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        reason: {$ref: 'CodeableConcept'},
        reasonNotGiven: {$ref: 'CodeableConcept'}
    }
};