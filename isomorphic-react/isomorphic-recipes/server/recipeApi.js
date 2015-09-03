'use strict'

var Promise = require('es6-promise').Promise;
var recipes = require('./data/recipes.json');

var recipeApi = {
    getRecipes: function() {
        return new Promise(function(resolve, reject) {
            resolve(recipes);
        });
    },
    getRecipeByName: function(name) {
        return new Promise(function(resolve, reject) {
            recipes.map(function(item, index) {
                if(item.name === name) {
                    resolve(item)
                }
            });
        });
    }
};

module.exports = recipeApi;
