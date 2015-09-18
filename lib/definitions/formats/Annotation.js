var assertions = require('../../utils/assertions');

module.exports = assertions.assert([
    assertions.choice('author', 'author[x] is a choice')
]);