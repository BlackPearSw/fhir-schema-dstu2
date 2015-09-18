var fhir = require('../lib');

var schema = fhir.schema.Patient;
var data = {
    resourceType: 'Patient',
    id: '123456',
    meta: {
        versionId: '1',
        lastUpdated: '2015-04-01T12:30:12.000Z',
        profile: [
            'http://foo.bar/Patient'
        ]
    },
    implicitRules: 'http://foo.bar/rules',
    language: 'en-GB',
    text: {
        status: 'generated',
        div: '<p>John J. Doe (2010-04-01)</p>'
    },
    gender: 'male',
    deceasedBoolean: false,
    multipleBirthBoolean: true,
    address: [
        {
            text: '59 Lincombe Drive, Leeds, West Yorkshire, LS8 1PS',
            line: [
                '59 Lincombe Drive',
                'Leeds',
                'West Yorkshire'
            ],
            city: 'Leeds',
            state: 'West Yorkshire',
            postalCode: 'LS8 1PS'
        }
    ]
};

var result = fhir.validator.validate(data, schema);

if (result.valid) {
    console.log('Patient is valid');
} else {
    console.log('Patient is not valid');
    console.log(result);
}

