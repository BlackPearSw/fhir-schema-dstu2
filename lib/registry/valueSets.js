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
    },
    QuantityComparator: {
        codes: ['<', '<=', '>=', '>']
    },
    MedicationOrderStatus: {
        codes: ['active', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'draft']
    },
    MedicationAdministrationStatus: {
        codes: ['in-progress', 'on-hold', 'completed', 'entered-in-error', 'stopped']
    },
    UnitsOfTime: {
        codes: [ 's', 'min', 'h', 'd', 'wk', 'mo', 'a']
    },
    EventTiming: {
        codes: ['HS','WAKE','C','CM','CD','CV','AC','ACM','ACD','ACV','PC','PCM','PCD','PCV']
    }
};
