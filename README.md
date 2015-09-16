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

    var FHIR_DSTU2 = require('fhir-schema-dstu2');

    var validator = new FHIR_DSTU2.Validator(FHIR_DSTU2.resources.Patient(), FHIR_DSTU2.formats);

    var patient = {
        id: '123456789',
        meta: {
            versionId: '1',
            lastUpdated: '2015-05-26T11:15:31Z'
        },
        resourceType: 'Patient',
        identifier: [
            {
                use: 'usual',
                system: 'http://health.org/identifier',
                value: '4123456789'
            }
        ],
        name: [
            {
                text: 'John J. Doe',
                family: ['Doe'],
                given: ['John', 'Joe']
            }
        ],
        gender: 'male',
        birthDate: '1980-04-12'
    };

    var result = validator.validate(patient);

    console.log(result);

## Notices

Copyright (c) 2014-2015 Black Pear Software, (c) 2015 Endeavour Health Charitable Trust

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements

Work supported by [Endeavour Health Charitable Trust](http://www.endeavourhealth.org/) and [Black Pear Software](https://www.blackpear.com)