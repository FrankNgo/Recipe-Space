import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecipePick } from './NutritionalRecipes.js';


const displayData = response => {
  console.log(response.hits);
  response.hits.forEach(hit => {
    console.log(hit);
    console.log(hit.recipe);
    console.log(hit.recipe.label);
    $('#recipes').append(`<li>${hit.recipe.label}</li>`);
  });
};

$(document).ready(() => {
    let recipeList = new RecipePick();

    $('#recipeSearch').click(e => {
    $('#recipes').empty()
    e.preventDefault();
    let userInput = $('#recipe').val()
    RecipePick.prototype.getRecipes(userInput, displayData)

  });
});


// $(document).ready(function() {
//   $('#recipeSearch').click(function() {
//     event.preventDefault();
//     let recipe = $('#recipe').val();
//     let recipe_api = new RecipeApi(recipe);
//
//     let promise = recipe_api.getRecipes();
//     $("#recipes").empty();
//
//     promise.then(function(response) {
//       parseResponse(response);
//     },function(error){
//       $("#output").text(error);
//     });
//   });
//
// });
