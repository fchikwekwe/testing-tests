const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

// TODO: Challenge - add the 2 required imports here.
const should = chai.should();


function greaterThanFive(num) {
    if (num > 5) return true;
    return false;
}

describe('Example Sinon Stub', () => {
    it('should pass', (done) => {
        const greaterThanFive = sinon.stub().returns('something');
        greaterThanFive(0).should.eql('something');
        greaterThanFive(0).should.not.eql(false);
        done();
    });
});
