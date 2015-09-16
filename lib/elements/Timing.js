var code = require('../elements/code');
var formats = require('../formats');
var assertions = require('../assertions');
var registry = require('../registry');

var repeat = function () {
    var schema = {
        title: 'Timing.repeat',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            boundsQuantity: {$ref: 'Duration'},
            boundsRange: {$ref: 'Range'},
            boundsPeriod: {$ref: 'Period'},
            count: {$ref: 'integer'},
            duration: {$ref: 'decimal'},
            durationMax: {$ref: 'decimal'},
            durationUnits: code({codes: registry.valueSets.UnitsOfTime.codes}),
            frequency: {$ref: 'integer'},
            frequencyMax: {$ref: 'integer'},
            period: {$ref: 'decimal'},
            periodUnits: code({codes: registry.valueSets.UnitsOfTime.codes}),
            when: code({codes: registry.valueSets.EventTiming.codes})
        },
        format: 'Timing.repeat'
    };

    formats['Timing.repeat'] = assertions.assert([
        assertions.choice('bounds', 'bounds[x] is a choice')
    ]);

    //TODO: additional business rules for Timing

    return schema;
};

var Timing = function (options) {
    var schema = {
        title: 'Timing',
        allOf: [
            {$ref: 'Element'}
        ],
        properties: {
            event: {
                type: 'array',
                items: {$ref: 'dateTime'}
            },
            repeat: repeat(),
            code: {$ref: 'CodeableConcept'}
        }
    };

    return schema;
};

module.exports = Timing;