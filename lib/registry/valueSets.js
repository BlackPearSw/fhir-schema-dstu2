module.exports = {
    AdministrativeGender: {
        uri: 'http://hl7.org/fhir/administrative-gender',
        oid: '2.16.840.1.113883.4.642.2.1',
        codingSystem: 'Sex',
        description: 'The administrative sex of a person.',
        issuer: 'HL7',
        codes: ['male','female','other','unknown']
    },
    IdentityAssuranceLevel: {
        codes: ['level1', 'level2', 'level3', 'level4']
    }
};
