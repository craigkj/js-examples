'use strict'

var routes = require('../routes');
var express = require('express');
var request = require('supertest');
var rewire = require('rewire');

var app;

function createServer(appRoutes = routes) {
    app = express();
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'jade');
    app.use(appRoutes);
    app = app.listen(7080);
}

function returnsSuccess(response) {
    return response.body.success;
};

describe('the app', function() {

    describe('The application routes', function() {

        before(function() {
            createServer();
        });

        describe('the root endpoint', function() {
            it('should return a 200', function(done) {
                this.timeout(4000);
                request(app)
                    .get('/')
                    .expect(200)
                    .end(function(err) {
                        if (err) throw err;
                        done();
                  });
            });
        });

        describe('error routes', function() {
            it('should return a 404 when invalid path is requested', function(done) {
                request(app)
                    .get('/invalid/path')
                    .expect(404)
                    .end(function(err){
                        if (err) throw err;
                        done();
                });
            });
        });
    });
})
