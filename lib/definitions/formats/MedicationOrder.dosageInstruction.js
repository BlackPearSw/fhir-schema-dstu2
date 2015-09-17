var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('asNeeded', 'asNeeded[x] is a choice'),
    assertions.choice('site', 'site[x] is a choice'),
    assertions.choice('dose', 'dose[x] is a choice'),
    assertions.choice('rate', 'rate[x] is a choice')
]);