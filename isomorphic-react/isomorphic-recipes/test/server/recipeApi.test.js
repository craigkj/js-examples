'use strict'

var api = require('../../server/recipeApi');
var Promise = require('es6-promise').Promise;
var rewire = require('rewire');

describe('The recipe Api', function() {

    describe('when getting all recipes', function() {

        it('should return a promise', function() {
            expect(api.getRecipes())
                .to.be.an.instanceof(Promise)
        });

        describe('when data is retrieved successfully', function() {

            it('should resolve the promise', function(done) {
                expect(api.getRecipes())
                    .to.eventually.be.fulfilled
                    .should.notify(done);
            });

            it('should return an array', function(done) {
                expect(api.getRecipes())
                    .to.eventually.be.fulfilled
                    .to.be.instanceof(Array)
                    .should.notify(done);
            });

            // it('should return the expected data', function(done) {
            //
            //     var expectedData = [{
            //         "name" : "exampleName",
            //         "image" : "exampleImage",
            //         "time" : "exampleTime",
            //         "ingredients" : "exampleIngredients"
            //     }];
            //
            //     var api = rewire('../../server/recipeApi');
            //     api.__set__('recipes', expectedData);
            //
            //     expect(api.getRecipes())
            //         .to.eventually.be.fulfilled
            //         .to.equal(expectedData)
            //         .should.notify(done);
            // })
        });
    });
});
