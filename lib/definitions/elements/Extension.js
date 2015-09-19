var Extension = {
    title: 'Extension',
    type: 'object',
    required: ['url'],
    allOf: [
        {$ref: 'Element'},
        {
            oneOf: [
                {required: ['valueInteger']},
                {required: ['valueDecimal']},
                {required: ['valueDateTime']},
                {required: ['valueDate']},
                {required: ['valueInstant']},
                {required: ['valueString']},
                {required: ['valueUri']},
                {required: ['valueBoolean']},
                {required: ['valueCode']},
                {required: ['valueMarkdown']},
                {required: ['valueBase64Binary']},
                {required: ['valueCoding']},
                {required: ['valueCodeableConcept']},
                {required: ['valueAttachment']},
                {required: ['valueIdentifier']},
                {required: ['valueQuantity']},
                {required: ['valueRange']},
                {required: ['valuePeriod']},
                {required: ['valueRatio']},
                {required: ['valueHumanName']},
                {required: ['valueAddress']},
                {required: ['valueContactPoint']},
                {required: ['valueTiming']},
                {required: ['valueSignature']},
                {required: ['valueReference']},
                {required: ['extension']}
            ]
        }
    ],
    properties: {
        url: {$ref: 'uri'},
        valueInteger: {$ref: 'integer'},
        valueDecimal: {$ref: 'decimal'},
        valueDateTime: {$ref: 'dateTime'},
        valueDate: {$ref: 'date'},
        valueInstant: {$ref: 'instant'},
        valueString: {$ref: 'string'},
        valueUri: {$ref: 'uri'},
        valueBoolean: {$ref: 'boolean'},
        valueCode: {$ref: 'code'},
        valueMarkdown: {$ref: 'markdown'},
        valueBase64Binary: {$ref: 'base64Binary'},
        valueCoding: {$ref: 'Coding'},
        valueCodeableConcept: {$ref: 'CodeableConcept'},
        valueAttachment: {$ref: 'Attachment'},
        valueIdentifier: {$ref: 'Identifier'},
        valueQuantity: {$ref: 'Quantity'},
        valueRange: {$ref: 'Range'},
        valuePeriod: {$ref: 'Period'},
        valueRatio: {$ref: 'Ratio'},
        valueHumanName: {$ref: 'HumanName'},
        valueAddress: {$ref: 'Address'},
        valueContactPoint: {$ref: 'ContactPoint'},
        valueTiming: {$ref: 'Timing'},
        valueSignature: {$ref: 'Signature'},
        valueReference: {$ref: 'Reference'}
    }
};

module.exports = Extension;