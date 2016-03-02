/**
 * Created by Ivan on 2/3/16.
 */

var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var app = require('../examples/rest-api/server');

describe('Testing with the response is empty', function() {

    it('should  list shop details', function(done) {

        supertest(app)
            .get('/api/v1/shops/1')
            .expect("Content-type",/json/)
            .end(function(err,res){
                res.status.should.equal(200);
                res.type.should.equal('application/hal+json');
                done();
            });
    });
});