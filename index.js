var tldjs = require('tldjs');

var disposable = require('./data/disposable.js')
var free = require('./data/free.js')

disposable = disposable.emails
free = free.emails

function isFree(email) {
    if (typeof email !== 'string') throw new TypeError('email must be a string');
    var domain = tldjs.getDomain(email.split('@').pop());
    return free.indexOf(domain) !== -1;
}

function isDisposable(email) {
    if (typeof email !== 'string') throw new TypeError('email must be a string');
    var domain = tldjs.getDomain(email.split('@').pop());
    return disposable.indexOf(domain) !== -1;
}

module.exports = {
    isFree: isFree,
    isDisposable: isDisposable
};