# fhir-schema-dstu2

JSON schema v4 schemas for FHIR DSTU2 resources, bundled with tv4 validator.

For Resources:
- Person
- Patient
- Practitioner
- Organization
- Condition
- MedicationOrder
- Immunization
- AllergyIntolerance

## Prerequisites

Node.JS v0.12.*

## Install

Install repository from github:

    $ npm install BlackPearSw/fhir-schema-dstu2

## Tests

Tests can be run using:

    $ npm test

## Use


    var fhir = require('fhir-schema-dstu2');

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

## Notices

Copyright (c) 2014-2015 Black Pear Software, (c) 2015 Endeavour Health Charitable Trust

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements

Work supported by [Endeavour Health Charitable Trust](http://www.endeavourhealth.org/) and [Black Pear Software](https://www.blackpear.com)
