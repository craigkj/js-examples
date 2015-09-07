var alt = require('../alt');
var RecipeActions = require('../actions/recipeActions');

class RecipeStore {
    constructor() {
        this.bindListeners({
            handleFetchRecipes: RecipeActions.FETCH_RECIPES
        });
    }
    handleFetchRecipes(recipes) {
        this.recipes = recipes;
    }
}

module.exports = alt.createStore(RecipeStore, 'RecipeStore');
