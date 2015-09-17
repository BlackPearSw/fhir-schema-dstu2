var Extension = {
    title: 'Extension',
    type: 'object',
    required: ['url'],
    allOf: [
        {$ref: 'Element'}
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
    },
    format: 'Extension'
};

module.exports = Extension;