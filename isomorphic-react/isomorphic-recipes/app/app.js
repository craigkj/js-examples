var React = require('react');
var Recipe = require('./components/recipe');
var RecipeList = require('./components/recipeList');
var alt = require('./alt');
var Iso = require('iso');

Iso.bootstrap(function (state, _, container) {
    alt.bootstrap(state);

    if (document.getElementById('recipeList')) {
        React.render(
            <RecipeList />,
            container
        );
    } else if (document.getElementById('recipe')) {
        React.render(
            <Recipe />,
            container
        );
    }
});
