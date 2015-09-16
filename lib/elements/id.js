var id = function() {
    return {
        title: 'id',
        type: 'string',
        pattern: /^[A-Za-z0-9\-\.]{1,64}$/
    };
};

module.exports = id;