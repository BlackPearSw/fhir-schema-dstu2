var utils = require('../utils/index');
var string = require('../elements/string');
var code = require('../elements/code');
var integer = require('../elements/integer');
var decimal = require('../elements/decimal');
var dateTime = require('../elements/dateTime');
var Duration = require('../elements/Duration');
var Range = require('../elements/Range');
var Period = require('../elements/Period');
var CodeableConcept = require('../elements/CodeableConcept');
var formats = require('../formats');
var assertions = require('../assertions');
var registry = require('../registry');

var repeat = function () {
    var schema = {
        title: 'FHIR DSTU2 Timing.repeat',
        properties: {
            boundsQuantity: Duration(),
            boundsRange: Range(),
            boundsPeriod: Period(),
            count: integer(),
            duration: decimal(),
            durationMax: decimal(),
            durationUnits: code({codes: registry.valueSets.UnitsOfTime.codes}),
            frequency: integer(),
            frequencyMax: integer(),
            period: decimal(),
            periodUnits: code({codes: registry.valueSets.UnitsOfTime.codes}),
            when: code({codes: registry.valueSets.EventTiming.codes})
        },
        format: 'DSTU2.Timing.repeat'
    };

    formats['DSTU2.Timing.repeat'] = assertions.assert([
        assertions.choice('bounds', 'bounds[x] is a choice')
    ]);

    //TODO: additional business rules for Timing

    return utils.factory.makeElement(schema);
};

var Timing = function (options) {
    var schema = {
        title: 'FHIR DSTU2 Timing',
        properties: {
            event: {
                type: 'array',
                items: dateTime()
            },
            repeat: repeat(),
            code: CodeableConcept()
        }
    };

    return utils.factory.makeElement(schema);
};

module.exports = Timing;