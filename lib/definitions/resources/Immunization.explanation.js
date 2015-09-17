var explanation = {
    title: 'Immunization.explanation',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    properties: {
        reason: {$ref: 'CodeableConcept'},
        reasonNotGiven: {$ref: 'CodeableConcept'}
    }
};

module.exports = explanation;