var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('who', 'who[x] is a choice')
]);