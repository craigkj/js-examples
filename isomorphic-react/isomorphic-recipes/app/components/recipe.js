/** @jsx React.DOM */
var React = require('react');
var RecipeStore = require('../stores/recipeStore');

var Recipe = React.createClass({
    getInitialState() {
        return this.props;
    },
    componentDidMount() {
        RecipeStore.listen(this._onChange);
    },
    componentWillUnmount() {
        RecipeStore.unlisten(this._onChange);
    },
    render() {
        var recipe = this.state.recipe;
        var imageUrl = '/images/' + this.state.recipe.image;

        return (
            <div className="recipe">
                <div className="pull-left"><img src={imageUrl} /></div>
                <div>
                    <ul className="list-unstyled">
                        <li><strong>Name</strong>: {recipe.name}</li>
                        <li><strong>Cooking Time</strong>: {recipe.time} Minutes</li>
                        <li><strong>Ingredients</strong>:
                            <ul className="list-unstyled">
                                { (recipe.ingredients) ?
                                    recipe.ingredients.map(function(ingredient, index) {
                                        return <li key={ingredient}>{ingredient}</li>
                                    }) : null
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Recipe;
