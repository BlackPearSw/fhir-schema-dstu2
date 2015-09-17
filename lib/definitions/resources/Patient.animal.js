var animal = {
    title: 'Patient.animal',
    allOf: [
        {$ref: 'BackboneElement'}
    ],
    required: ['species'],
    properties: {
        species: {$ref: 'CodeableConcept'},
        breed: {$ref: 'CodeableConcept'},
        genderStatus: {$ref: 'CodeableConcept'}
    }
};

module.exports = animal;