var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('onset', 'onset[x] is a choice'),
    assertions.choice('abatement', 'abatement[x] is a choice')
]);