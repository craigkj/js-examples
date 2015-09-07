var alt = require('../alt');
var recipeService = require('../services/RecipeService');
var Promise = require('es6-promise').Promise;

class RecipeActions {
    fetchRecipes() {
        var that = this;
        recipeService.getRecipes().then(function(data) {
            that.dispatch(data);
        }, function(error) {
            console.log(error);
        }).catch(function(error) {
            console.log(error);
        });
    }
}

module.exports = alt.createActions(RecipeActions);
