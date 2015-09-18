var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('deceased', 'deceased[x] is a choice'),
    assertions.choice('multipleBirth', 'multipleBirth[x] is a choice')
]);