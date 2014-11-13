var test = require('tape');

var clilib = require('../SOURCE/clilib.js');

test('clilib is an object', function (assert) {
    assert.strictEqual(typeof clilib, 'object');
    assert.end();
});
