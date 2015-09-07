// node versions later than 0.10.35 have troubles with this (0.12 at least)
require('node-jsx').install({ harmony: true })

var express = require('express');
var router = express.Router();
var recipeApi = require('./server/recipeApi');
var RecipeList = require('./app/components/recipeList');
var React = require('react');
var alt = require('./app/alt');
var Iso = require('iso');

function renderRecipes(request, response) {
    recipeApi.getRecipes()
        .then(function(recipes) {

            var data = { RecipeStore: { recipes: recipes } }
            alt.bootstrap(JSON.stringify(data));
            var iso = new Iso();
            var content = React.renderToString(React.createElement(RecipeList));
            iso.add(content, alt.flush())
            response.render('index', {
                html: iso.render()
            });

        }, function(error) {
            response.send();
        });
};

function renderRecipeByName(request, response) {
    recipeApi.getRecipeByName(request.params.recipeName)
        .then(function(recipe) {
            try {
                var data = { RecipeStore: { recipes: [recipe] } }
                alt.bootstrap(JSON.stringify(data));
                var iso = new Iso();
                var content = React.renderToString(React.createElement(RecipeList));
                iso.add(content, alt.flush())
                response.render('index', {
                    html: iso.render()
                });
            } catch(e) {
                console.log('error');
                console.log(e);
            }

        }, function(error) {
            response.send();
        });
}

function renderRawRecipes(request, response, next) {
    recipeApi.getRecipes()
        .then(function(data) {
            response.json(data);
        }, function(error) {
            next(); // fall back to error
        })
}

router.get('/', renderRecipes);
router.get('/recipe/:recipeName', renderRecipeByName);
router.get('/api/recipes', renderRawRecipes);

router.use(function(request, response) {
    response.status(404);
    response.json({success: false, error: '404 not found'});
});

module.exports = router;
