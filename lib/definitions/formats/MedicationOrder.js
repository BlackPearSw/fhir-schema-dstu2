var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice(['reasonCodeableConcept', 'reasonReference'], 'reason[x] is a choice')
]);