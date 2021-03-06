/** @jsx React.DOM */
var React = require('react');
var Recipe = require('./Recipe');
var RecipeStore = require('../stores/recipeStore');
var RecipeActions = require('../actions/recipeActions');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

var RecipeList =
    React.createClass({
        getInitialState() {
            return RecipeStore.getState();
        },
        componentDidMount: function() {
            RecipeStore.listen(this._onChange);
        },
        componentWillMount() {
            if (canUseDOM) {
                RecipeActions.fetchRecipes();
            }
        },
        componentWillUnmount() {
            RecipeStore.unlisten(this._onChange);
        },
        _onChange() {
            this.setState(RecipeStore.getState());
        },
        render() {
            return (
                <div className="recipe-list">
                    <h2>Recipe List</h2>
                    { (this.state.recipes) ?
                        this.state.recipes.map(function(recipe, index) {
                            recipe.index = index;
                            return <Recipe key={recipe.name} recipe={recipe} />;
                        }) : null
                    }

                </div>
            );
        }
    });
module.exports = RecipeList;
