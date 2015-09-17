var communication = {
    title: 'Patient.communication',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['language'],
    properties: {
        language: {$ref: 'CodeableConcept'},//TODO bind to Language
        preferred: {$ref: 'boolean'}
    }
};

module.exports = communication;