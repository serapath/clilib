var test = require('tape');

var clilib = require('../index.js');

test('clilib is a function', function (assert) {
    assert.strictEqual(typeof clilib, 'function');
    assert.end();
});
