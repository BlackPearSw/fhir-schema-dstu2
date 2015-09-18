module.exports = {
    type: 'string',
    enum: ['invalid','structure','required','value','invariant',
        'security','login','unknown','expired','forbidden','suppressed',
        'processing','not-supported','duplicate','not-found','too-long','code-invalid','extension',
        'too-costly','business-rule','conflict','incomplete',
        'transient','lock-error','no-store','exception','timeout','throttled',
        'informational']
};