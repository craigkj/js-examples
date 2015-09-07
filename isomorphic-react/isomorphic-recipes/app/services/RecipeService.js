var Promise = require('es6-promise').Promise;

class RecipeService {
    getRecipes() {
        return new Promise(function(resolve, reject) {
            var url = 'http://localhost:7080/api/recipes';

            function success() {
                try {
                    var recipes = JSON.parse(this.responseText);
                    resolve(recipes);
                } catch (error) {
                    reject('Error fetching notifications: ' + error);
                }
            }
            try {
                var request = new XMLHttpRequest();
                request.onload = success;
                request.open('get', url, true);
                request.send();
            } catch (error) {
                console.log('error fetching');
                reject(error);
            }
        });
    }
};

// var makeHttpRequest = function(type, url, success) {
//     var request = (xmlHttpRequest) ? xmlHttpRequest : new XMLHttpRequest();
//     request.onload = success;
//     request.open(type, url, true);
//     request.send();
// }

module.exports = new RecipeService();
