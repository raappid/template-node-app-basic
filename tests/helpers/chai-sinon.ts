
declare var global;

var chai = require('chai');
var sinon = require('sinon');

chai.config.includeStack = true;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;


var sandbox;

beforeEach(function() {
    this.sinon = sandbox = sinon.sandbox.create();
});

afterEach(function() {
    sandbox.restore();
});
