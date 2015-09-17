var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('medication', 'medication[x] is a choice')
]);