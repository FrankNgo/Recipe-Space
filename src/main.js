import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecipeApi } from './NutritionalRecipes.js';

$(document).ready(function() {

  function parseResponse(title){
    $("#recipes").text(title);
    //  , recipe_image, label, ingredientList);
  }

  $('#recipeSearch').click(function() {
    event.preventDefault();
    let recipe = $('#recipe').val();
    let recipe_api = new RecipeApi(recipe);

    let promise = recipe_api.getRecipes();
    $("#recipes").empty();

    promise.then(function(response) {
      parseResponse(response);
    },function(error){
      $("#output").text(error);
    });
  });

});
